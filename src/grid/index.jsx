import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRGrid',
  blockClassName: 'mdl-grid',
  modifiers: [
    {
      prop: 'noSpacing',
      type: React.PropTypes.bool,
      className: 'mdl-grid--no-spacing'
    }
  ]
})
class Grid extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default Grid;
