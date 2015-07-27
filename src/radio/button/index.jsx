import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRRadioButton',
  blockClassName: 'mdl-radio__button',
  modifiers: [
  ]
})
class RadioButton extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default RadioButton;
