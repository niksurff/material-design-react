import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMiniFooterRightSection',
  blockClassName: 'mdl-mini-footer__right-section',
  modifiers: [
  ]
})
class MiniFooterRightSection extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MiniFooterRightSection;
