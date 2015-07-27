import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRTextfieldError',
  blockClassName: 'mdl-textfield__error',
  modifiers: [
  ]
})
class TextfieldError extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default TextfieldError;
