import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMegaFooterLinkList',
  blockClassName: 'mdl-mega-footer__link-list',
  modifiers: [
  ]
})
class MegaFooterLinkList extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MegaFooterLinkList;
