import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRLayoutTitle',
  blockClassName: 'mdl-layout-title',
  modifiers: [
    {
      prop: 'isActive',
      type: React.PropTypes.bool,
      className: 'is-active'
    }
  ]
})
class LayoutTitle extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default LayoutTitle;
