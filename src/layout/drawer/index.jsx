import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRLayoutDrawer',
  blockClassName: 'mdl-layout__drawer',
  modifiers: [
  ]
})
class LayoutDrawer extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default LayoutDrawer;
