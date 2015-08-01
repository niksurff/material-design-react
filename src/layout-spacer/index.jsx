import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRLayoutSpacer',
  blockClassName: 'mdl-layout-spacer',
  modifiers: [
    {
      prop: 'isActive',
      type: React.PropTypes.bool,
      className: 'is-active'
    }
  ]
})
class LayoutSpacer extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default LayoutSpacer;
