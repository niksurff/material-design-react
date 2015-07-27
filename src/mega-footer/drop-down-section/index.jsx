import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMegaFooterDropDownSection',
  blockClassName: 'mdl-mega-footer__drop-down-section',
  modifiers: [
  ]
})
class MegaFooterDropDownSection extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MegaFooterDropDownSection;
