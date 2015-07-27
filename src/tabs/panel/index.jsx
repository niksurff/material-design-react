import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRTabsPanel',
  blockClassName: 'mdl-tabs__panel',
  modifiers: [
  ]
})
class TabsPanel extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default TabsPanel;
