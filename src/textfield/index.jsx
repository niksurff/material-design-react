import React from 'react';
import mdlHook from '../lib/mdl-hook';
import TextfieldInput from './input';
import TextfieldLabel from './label';
import TextfieldError from './error';

@mdlHook({
  displayName: 'MDRTextfield',
  blockClassName: 'mdl-textfield mdl-js-textfield',
  modifiers: [
    {
      prop: 'floatingLabel',
      type: React.PropTypes.bool,
      className: 'mdl-textfield--floating-label'
    }
    {
      prop: 'expandable',
      type: React.PropTypes.bool,
      className: 'mdl-textfield--expandable'
    }
  ]
})
class Textfield extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

Textfield.Input = TextfieldInput;
Textfield.Label = TextfieldLabel;
Textfield.Error = TextfieldError;

export default Textfield;
