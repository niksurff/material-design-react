import React from 'react';
import omit from 'omit';
// import isString from 'is-string';

export default function mdlHooked(config) {
  return function decorator(Target) {

    let MDRComponent =  class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          childProps: prepareChildProps(this.props, config)
        };
      }

      componentWillReceiveProps(props) {
        let childProps = prepareChildProps(props, config);
        this.setState({childProps});
      }

      // credit: http://quaintous.com/2015/07/09/react-components-with-mdl/
      componentDidUpdate() {
        if (config.upgradable && window.componentHandler) {
          window.componentHandler.upgradeDom();
        }
      }

      render() {
        return <Target {...this.state.childProps} />;
      }
    };

    return MDRComponent;
  }
}

/*
 * returns props for wrapped element
 * 1) creates mdl css classes from processed config
 * 2) removes configured props
 * 3) merges and returns filtered props with mdl className
 */
function prepareChildProps(props, config) {
  let {
    block,
    modifiers = [],
    ripple = false,
    jsExtras = [],
    upgradable = true
  } = config;
  let omitModifiers = omit(modifiers);

  // 1)
  let blockClassName = `mdl-${block}`;
  let blockJSClassName = upgradable ? `mdl-js-${block}` : '';
  let rippleClassName = upgradable && props['ripple'] ? `mdl-js-ripple-effect`
    : '';
  let jsExtrasClassName = jsExtras
    .filter((e) => upgradable && props[m] === true)
    .map((e) => `mdl-js-${block}`)
    .join('  ');
  let modifierClassName = modifiers
    .filter((m) => props[m] === true)
    .map((m) => `mdl-${block}--${m}`)
    .join('  ');
  let propsClassName = props.className || '';

  let className = [
    blockClassName,
    blockJSClassName,
    rippleClassName,
    jsExtrasClassName,
    modifierClassName,
    propsClassName
  ].join('  ');

  // 2)
  let filteredProps = omitModifiers(props);

  // 3)
  Object.assign(filteredProps, {className})
  return filteredProps;
}
