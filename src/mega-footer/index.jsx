import React from 'react';
import mdlHook from '../lib/mdl-hook';
import MegaFooterTopSection from './top-section';
import MegaFooterLeftSection from './left-section';
import MegaFooterSocialBtn from './social-btn';
import MegaFooterRightSection from './right-section';
import MegaFooterMiddleSection from './middle-section';
import MegaFooterDropDownSection from './drop-down-section';
import MegaFooterHeading from './heading';
import MegaFooterLinkList from './link-list';
import MegaFooterBottomSection from './bottom-section';

@mdlHook({
  displayName: 'MDRMegaFooter',
  blockClassName: 'mdl-mega-footer',
  modifiers: [
  ]
})
class MegaFooter extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

MegaFooter.TopSection = MegaFooterTopSection;
MegaFooter.LeftSection = MegaFooterLeftSection;
MegaFooter.SocialBtn = MegaFooterSocialBtn;
MegaFooter.RightSection = MegaFooterRightSection;
MegaFooter.MiddleSection = MegaFooterMiddleSection;
MegaFooter.DropDownSection = MegaFooterDropDownSection;
MegaFooter.Heading = MegaFooterHeading;
MegaFooter.LinkList = MegaFooterLinkList;
MegaFooter.BottomSection = MegaFooterBottomSection;

export default MegaFooter;
