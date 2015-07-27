import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRIconToggleInput',
  blockClassName: 'mdl-icon-toggle__input',
  modifiers: [
  ]
})
class IconToggleInput extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default IconToggleInput;
