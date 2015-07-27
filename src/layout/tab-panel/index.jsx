import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRLayoutTabPanel',
  blockClassName: 'mdl-layout__tab-panel',
  modifiers: [
  ]
})
class LayoutTabPanel extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default LayoutTabPanel;
