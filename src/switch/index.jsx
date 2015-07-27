import React from 'react';
import mdlHook from '../lib/mdl-hook';
import SwitchInput from './input';
import SwitchLabel from './label';

@mdlHook({
  displayName: 'MDRSwitch',
  blockClassName: 'mdl-switch mdl-js-switch',
  modifiers: [
  ]
})
class Switch extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

Switch.Input = SwitchInput;
Switch.Label = SwitchLabel;

export default Switch;
