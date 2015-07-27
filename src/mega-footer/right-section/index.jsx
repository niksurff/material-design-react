import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMegaFooterRightSection',
  blockClassName: 'mdl-mega-footer__right-section',
  modifiers: [
  ]
})
class MegaFooterRightSection extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MegaFooterRightSection;
