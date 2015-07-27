import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRBadge',
  blockClassName: 'mdl-badge',
  modifiers: [
    {
      prop: 'noBackground',
      type: React.PropTypes.bool,
      className: 'mdl-badge--no-background'
    }
  ]
})
class Badge extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default Badge;
