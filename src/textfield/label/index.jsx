import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRTextfieldLabel',
  blockClassName: 'mdl-textfield__label',
  modifiers: [
  ]
})
class TextfieldLabel extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default TextfieldLabel;
