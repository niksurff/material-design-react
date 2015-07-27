import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMegaFooterLeftSection',
  blockClassName: 'mdl-mega-footer__left-section',
  modifiers: [
  ]
})
class MegaFooterLeftSection extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MegaFooterLeftSection;
