import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMegaFooterTopSection',
  blockClassName: 'mdl-mega-footer__top-section',
  modifiers: [
  ]
})
class MegaFooterTopSection extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MegaFooterTopSection;
