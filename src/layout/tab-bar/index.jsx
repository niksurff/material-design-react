import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRLayoutTabBar',
  blockClassName: 'mdl-layout__tab-bar',
  modifiers: [
  ]
})
class LayoutTabBar extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default LayoutTabBar;
