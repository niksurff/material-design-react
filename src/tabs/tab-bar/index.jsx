import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRTabsTabBar',
  blockClassName: 'mdl-tabs__tab-bar',
  modifiers: [
  ]
})
class TabsTabBar extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default TabsTabBar;
