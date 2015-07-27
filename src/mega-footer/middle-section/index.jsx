import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMegaFooterMiddleSection',
  blockClassName: 'mdl-mega-footer__middle-section',
  modifiers: [
  ]
})
class MegaFooterMiddleSection extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MegaFooterMiddleSection;
