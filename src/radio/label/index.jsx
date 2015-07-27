import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRRadioLabel',
  blockClassName: 'mdl-radio__label',
  modifiers: [
  ]
})
class RadioLabel extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default RadioLabel;
