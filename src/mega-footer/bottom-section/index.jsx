import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMegaFooterBottomSection',
  blockClassName: 'mdl-mega-footer__bottom-section',
  modifiers: [
  ]
})
class MegaFooterBottomSection extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MegaFooterBottomSection;
