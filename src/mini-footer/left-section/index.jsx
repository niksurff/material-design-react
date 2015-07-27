import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMiniFooterLeftSection',
  blockClassName: 'mdl-mini-footer__left-section',
  modifiers: [
  ]
})
class MiniFooterLeftSection extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MiniFooterLeftSection;
