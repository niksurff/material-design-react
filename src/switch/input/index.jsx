import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRSwitchInput',
  blockClassName: 'mdl-switch__input',
  modifiers: [
  ]
})
class SwitchInput extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default SwitchInput;
