import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRCell',
  blockClassName: 'mdl-cell',
  modifiers: [
    {
      prop: 'hideDesktop',
      type: React.PropTypes.bool,
      className: 'mdl-cell--hide-desktop'
    }
    {
      prop: 'hideTablet',
      type: React.PropTypes.bool,
      className: 'mdl-cell--hide-tablet'
    }
    {
      prop: 'hidePhone',
      type: React.PropTypes.bool,
      className: 'mdl-cell--hide-phone'
    }
    {
      prop: 'stretch',
      type: React.PropTypes.bool,
      className: 'mdl-cell--stretch'
    }
    {
      prop: 'top',
      type: React.PropTypes.bool,
      className: 'mdl-cell--top'
    }
    {
      prop: 'middle',
      type: React.PropTypes.bool,
      className: 'mdl-cell--middle'
    }
    {
      prop: 'bottom',
      type: React.PropTypes.bool,
      className: 'mdl-cell--bottom'
    }
  ]
})
class Cell extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default Cell;
