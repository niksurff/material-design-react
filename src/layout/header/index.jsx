import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRLayoutHeader',
  blockClassName: 'mdl-layout__header',
  modifiers: [
    {
      prop: 'scroll',
      type: React.PropTypes.bool,
      className: 'mdl-layout__header--scroll'
    }
    {
      prop: 'waterfall',
      type: React.PropTypes.bool,
      className: 'mdl-layout__header--waterfall'
    }
    {
      prop: 'transparent',
      type: React.PropTypes.bool,
      className: 'mdl-layout__header--transparent'
    }
  ]
})
class LayoutHeader extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default LayoutHeader;
