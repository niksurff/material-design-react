import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRLayoutHeaderRow',
  blockClassName: 'mdl-layout__header-row',
  modifiers: [
  ]
})
class LayoutHeaderRow extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default LayoutHeaderRow;
