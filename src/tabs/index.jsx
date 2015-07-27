import React from 'react';
import mdlHook from '../lib/mdl-hook';
import TabsTabBar from './tab-bar';
import TabsTab from './tab';
import TabsPanel from './panel';

@mdlHook({
  displayName: 'MDRTabs',
  blockClassName: 'mdl-tabs mdl-js-tabs',
  modifiers: [
    {
      prop: 'isActive',
      type: React.PropTypes.bool,
      className: 'is-active'
    }
  ]
})
class Tabs extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

Tabs.TabBar = TabsTabBar;
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;

export default Tabs;
