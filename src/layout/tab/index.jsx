import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRLayoutTab',
  blockClassName: 'mdl-layout__tab',
  modifiers: [
  ]
})
class LayoutTab extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default LayoutTab;
