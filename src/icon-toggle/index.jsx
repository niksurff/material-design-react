import React from 'react';
import mdlHook from '../lib/mdl-hook';
import IconToggleInput from './input';
import IconToggleLabel from './label';

@mdlHook({
  displayName: 'MDRIconToggle',
  blockClassName: 'mdl-icon-toggle mdl-js-icon-toggle',
  modifiers: [
  ]
})
class IconToggle extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

IconToggle.Input = IconToggleInput;
IconToggle.Label = IconToggleLabel;

export default IconToggle;
