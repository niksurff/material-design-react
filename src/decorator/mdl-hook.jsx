import React from 'react';
import prepareProps from '../util/prepare-props';

export default function mdlHook(config) {
  let {displayName, blockClassName, modifiers = []} = config;
  let propTypes = modifiers
    .reduce((acc, cur) => {
      acc[cur.prop] = cur.type;
      return acc;
    }, {});

  let defaultProps = modifiers
    .reduce((acc, cur) => {
      if (cur.hasOwnProperty('default')) {
        acc[cur.prop] = cur.default;
      }
      return acc;
    }, {});
  let modifierClassNameFns = modifiers
    .reduce((acc, cur) => {
      let {className, classNameFn} = cur;
      acc[cur.prop] = className ? () => className : classNameFn;
      return acc;
    }, {});

  return function decorator(Target) {

    return class extends React.Component {
      static displayName = displayName
      static propTypes = propTypes;
      static defaultProps = defaultProps

      constructor(props) {
        super(props);
        this.state = {
          targetProps: prepareProps(
            props,
            {blockClassName, modifierClassNameFns}
          )
        };
      }

      componentWillReceiveProps(props) {
        let targetProps = prepareProps(
          props,
          {blockClassName, modifierClassNameFns}
        );
        this.setState({targetProps});
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
