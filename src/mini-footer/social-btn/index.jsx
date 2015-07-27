import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMiniFooterSocialBtn',
  blockClassName: 'mdl-mini-footer__social-btn',
  modifiers: [
  ]
})
class MiniFooterSocialBtn extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MiniFooterSocialBtn;
