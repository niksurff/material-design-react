import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDR:CardTitle',
  blockClassName: 'mdl-card__title',
  modifiers: [
    {
      prop: 'border',
      className: 'mdl-card--border',
      type: React.PropTypes.bool
    }
  ]
})
class CardTitle extends React.Component {

  render() {
    return <div {...this.props}/>;
  }
}

export default CardTitle;
