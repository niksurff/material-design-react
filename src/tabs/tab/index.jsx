import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRTabsTab',
  blockClassName: 'mdl-tabs__tab',
  modifiers: [
  ]
})
class TabsTab extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default TabsTab;
