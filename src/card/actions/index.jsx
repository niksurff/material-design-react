import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRCardActions',
  blockClassName: 'mdl-card__actions',
  modifiers: [
    {
      prop: 'border',
      className: 'mdl-card--border',
      type: React.PropTypes.bool
    }
  ]
})
class CardActions extends React.Component {

  render() {
    return <div {...this.props}/>;
  }
}

export default CardActions;
