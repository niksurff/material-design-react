import React from 'react';
import mdlHook from '../lib/mdl-hook';
import LayoutHeader from './header';
import LayoutHeaderRow from './header-row';
import LayoutDrawer from './drawer';
import LayoutContent from './content';
import LayoutTabBar from './tab-bar';
import LayoutTab from './tab';
import LayoutTabPanel from './tab-panel';

@mdlHook({
  displayName: 'MDRLayout',
  blockClassName: 'mdl-layout mdl-js-layout',
  modifiers: [
    {
      prop: 'isActive',
      type: React.PropTypes.bool,
      className: 'is-active'
    }
    {
      prop: 'fixedDrawer',
      type: React.PropTypes.bool,
      className: 'mdl-layout--fixed-drawer'
    }
    {
      prop: 'fixedHeader',
      type: React.PropTypes.bool,
      className: 'mdl-layout--fixed-header'
    }
    {
      prop: 'largeScreenOnly',
      type: React.PropTypes.bool,
      className: 'mdl-layout--large-screen-only'
    }
    {
      prop: 'fixedTabs',
      type: React.PropTypes.bool,
      className: 'mdl-layout--fixed-tabs'
    }
  ]
})
class Layout extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

Layout.Header = LayoutHeader;
Layout.HeaderRow = LayoutHeaderRow;
Layout.Drawer = LayoutDrawer;
Layout.Content = LayoutContent;
Layout.TabBar = LayoutTabBar;
Layout.Tab = LayoutTab;
Layout.TabPanel = LayoutTabPanel;

export default Layout;
