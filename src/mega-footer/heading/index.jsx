import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMegaFooterHeading',
  blockClassName: 'mdl-mega-footer__heading',
  modifiers: [
  ]
})
class MegaFooterHeading extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MegaFooterHeading;
