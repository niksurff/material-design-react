import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRIconToggleLabel',
  blockClassName: 'mdl-icon-toggle__label',
  modifiers: [
  ]
})
class IconToggleLabel extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default IconToggleLabel;
