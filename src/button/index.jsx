import React from 'react';
import paramCase from 'param-case';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRButton',
  blockClassName: 'mdl-button mdl-js-button',
  modifiers: [
    {
      prop: 'rippleEffect',
      className: 'mdl-js-ripple-effect',
      type: React.PropTypes.bool
      // default: false
    },
    {
      prop: 'ripple',
      className: 'mdl-js-ripple-effect',
      type: React.PropTypes.bool
    },
    {
      prop: 'raised',
      className: 'mdl-button--raised',
      type: React.PropTypes.bool
    },
    {
      prop: 'fab',
      className: 'mdl-button--fab',
      type: React.PropTypes.bool
    },
    {
      prop: 'miniFab',
      className: 'mdl-button--fab mdl-button--mini-fab',
      type: React.PropTypes.bool
    },
    {
      prop: 'icon',
      className: 'mdl-button--icon',
      type: React.PropTypes.bool
    },
    {
      prop: 'colored',
      className: 'mdl-button--colored',
      type: React.PropTypes.bool
    },
    {
      prop: 'accent',
      className: 'mdl-button--accent',
      type: React.PropTypes.bool
    },
    {
      prop: 'display',
      classNameFn: (val) => {
        return val === 'miniFab'
          ? 'mdl-button--fab  mdl-button--mini-fab'
          : `mdl-button--${val}`;
      },
      type: React.PropTypes.oneOf(['raised', 'fab', 'miniFab', 'icon'])
    }
  ]
})
class Button extends React.Component {

  render() {
    return <button {...this.props}/>;
  }
}

export default Button;
