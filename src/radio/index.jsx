import React from 'react';
import mdlHook from '../lib/mdl-hook';
import RadioButton from './button';
import RadioLabel from './label';

@mdlHook({
  displayName: 'MDRRadio',
  blockClassName: 'mdl-radio mdl-js-radio',
  modifiers: [
  ]
})
class Radio extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

Radio.Button = RadioButton;
Radio.Label = RadioLabel;

export default Radio;
