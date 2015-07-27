import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMiniFooterLinkList',
  blockClassName: 'mdl-mini-footer__link-list',
  modifiers: [
  ]
})
class MiniFooterLinkList extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MiniFooterLinkList;
