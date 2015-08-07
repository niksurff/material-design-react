import React from 'react';
import prepareProps from './prepare-props';

/**
 * # mdlHook
 *
 * wraps `Target` in higher order Component which
 * turns provided `config` into MDL CSS classes and provides lifecycle methods
 * for upgrading/ downgrading a Component via
 * [mdlComponentHandler](https://github.com/google/material-design-lite/blob/master/src/mdlComponentHandler.js).
 *
 * ## `config` Properties
 *
 * The `config` param takes the following properties:
 * 1. `displayName`<String>: React display name of higher order element
 * 2. `blockClassName`<String>: The Block -- as in BEM -- MDL CSS class (inc. js hook)
 * 3. `modifiers`<Array>: An array of modifier objects configuring MDL modifier (BEM) CSS classes.
 *
 * ### `modifiers[i]` Properties
 *
 * A modifier object takes the following props:
 * 1. `prop`<String>: Property name
 * 2. `className`<String>: MDL CSS class (mutually exclusive with `classNameFn`, takes precedence)
 * 3. `classNameFn`<Function>: A function returning MDL CSS class string, takes prop value as argument. ((mutually exclusive with `className`)
 * 4. `type`<Function>: One of React's `PropType`s (or custom)
 * 5. `default`<Any>: Default value (optional)
 */
export default function mdlHook({displayName, blockClassName, modifiers = []}) {

  let propTypes = makePropTypes(modifiers);
  let defaultProps = makeDefaultProps(modifiers);

  let prepareTargetProps  = (props) => prepareProps(props, {
    blockClassName,
    modifierClassNameFns: makeClassNameFns(modifiers)
  });

  return function decorator(Target) {

    return class extends React.Component {
      static displayName = displayName;
      static propTypes = propTypes;
      static defaultProps = defaultProps;

      constructor(props) {
        super(props);

        this.state = {
          targetProps: prepareTargetProps(props)
        };
      }

      componentWillReceiveProps(props) {
        this.setState({
          targetProps: prepareTargetProps(props)
        });
      }

      // credit: http://quaintous.com/2015/07/09/react-components-with-mdl/
      componentDidUpdate() {
        if (window.componentHandler) {
          window.componentHandler.upgradeDom();
        }
      }

      render() {
        return <Target {...this.state.targetProps} />;
      }
    };
  };
}

/**
 * Creates an object mapping prop names to (React style) prop types
 * @param  {Array} modifiers  List of modifier config objects
 * @return {Object}           propTypes object
 */
function makePropTypes(modifiers) {
  return modifiers.reduce((acc, cur) => {
    acc[cur.prop] = cur.type;
    return acc;
  }, {});
}

/**
 * Creates an object mapping prop names to default values
 * @param  {Array} modifiers  List of modifier config objects
 * @return {Object}           defaultProps objects
 */
function makeDefaultProps(modifiers) {
  return modifiers.reduce((acc, cur) => {
    if (cur.hasOwnProperty('default')) {
      acc[cur.prop] = cur.default;
    }
    return acc;
  }, {});
}

/**
 * Creates an object mapping prop names to functions returning MDL class name
 * @param  {Array} modifiers  List of modifier config objects
 * @return {Object}           classNameFns map
 */
function makeClassNameFns(modifiers) {
  return modifiers.reduce((acc, cur) => {
    let {className, classNameFn} = cur;
    acc[cur.prop] = className ? () => className : classNameFn;
    return acc;
  }, {});
}
