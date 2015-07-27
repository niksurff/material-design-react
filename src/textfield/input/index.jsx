import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRTextfieldInput',
  blockClassName: 'mdl-textfield__input',
  modifiers: [
  ]
})
class TextfieldInput extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default TextfieldInput;
