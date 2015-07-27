import React from 'react';
import mdlHook from '../lib/mdl-hook';
import CheckboxInput from './input';
import CheckboxLabel from './label';

@mdlHook({
  displayName: 'MDRCheckbox',
  blockClassName: 'mdl-checkbox mdl-js-checkbox',
  modifiers: [
  ]
})
class Checkbox extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

Checkbox.Input = CheckboxInput;
Checkbox.Label = CheckboxLabel;

export default Checkbox;
