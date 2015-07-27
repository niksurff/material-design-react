import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRSwitchLabel',
  blockClassName: 'mdl-switch__label',
  modifiers: [
  ]
})
class SwitchLabel extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default SwitchLabel;
