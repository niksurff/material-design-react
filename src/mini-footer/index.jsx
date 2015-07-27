import React from 'react';
import mdlHook from '../lib/mdl-hook';
import MiniFooterLeftSection from './left-section';
import MiniFooterLinkList from './link-list';
import MiniFooterRightSection from './right-section';
import MiniFooterSocialBtn from './social-btn';

@mdlHook({
  displayName: 'MDRMiniFooter',
  blockClassName: 'mdl-mini-footer',
  modifiers: [
  ]
})
class MiniFooter extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

MiniFooter.LeftSection = MiniFooterLeftSection;
MiniFooter.LinkList = MiniFooterLinkList;
MiniFooter.RightSection = MiniFooterRightSection;
MiniFooter.SocialBtn = MiniFooterSocialBtn;

export default MiniFooter;
