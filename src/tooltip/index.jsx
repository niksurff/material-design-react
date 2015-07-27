import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRTooltip',
  blockClassName: 'mdl-tooltip',
  modifiers: [
    {
      prop: 'large',
      type: React.PropTypes.bool,
      className: 'mdl-tooltip--large'
    }
  ]
})
class Tooltip extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default Tooltip;
