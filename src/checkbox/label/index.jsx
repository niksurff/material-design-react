import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRCheckboxLabel',
  blockClassName: 'mdl-checkbox__label',
  modifiers: [
  ]
})
class CheckboxLabel extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default CheckboxLabel;
