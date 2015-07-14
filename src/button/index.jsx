import React from 'react';
import mdlHook from '../decorator/mdl-hook';

@mdlHook({
  displayName: 'MDRButton',
  blockClassName: 'mdl-button mdl-js-button',
  modifiers: [
    {
      prop: 'ripple',
      className: 'mdl-js-ripple-effect',
      type: React.PropTypes.bool
      // default: false
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
      className: 'mdl-button--mini-fab',
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
      classNameFn: (val) => `mdl-button--${val}`,
      type: React.PropTypes.oneOf(['raised', 'fab', 'fabMini', 'icon'])
    }
  ]
})
class Button extends React.Component {

  render() {
    return <button {...this.props}/>;
  }
}

export default Button;
