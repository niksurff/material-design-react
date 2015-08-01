import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRLayoutIcon',
  blockClassName: 'mdl-layout-icon',
  modifiers: [
    {
      prop: 'isActive',
      type: React.PropTypes.bool,
      className: 'is-active'
    }
  ]
})
class LayoutIcon extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default LayoutIcon;
