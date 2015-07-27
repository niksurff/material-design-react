import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRCheckboxInput',
  blockClassName: 'mdl-checkbox__input',
  modifiers: [
  ]
})
class CheckboxInput extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default CheckboxInput;
