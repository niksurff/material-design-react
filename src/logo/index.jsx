import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRLogo',
  blockClassName: 'mdl-logo',
  modifiers: [
  ]
})
class Logo extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default Logo;
