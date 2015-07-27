import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMegaFooterSocialBtn',
  blockClassName: 'mdl-mega-footer__social-btn',
  modifiers: [
  ]
})
class MegaFooterSocialBtn extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MegaFooterSocialBtn;
