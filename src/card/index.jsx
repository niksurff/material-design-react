import React from 'react';
import mdlHook from '../decorator/mdl-hook';
import CardTitle from '../card-title';

@mdlHook({
  displayName: 'MDRCard',
  blockClassName: 'mdl-card mdl-js-card',
  modifiers: [
    {
      prop: 'shadow',
      classNameFn: (val) => `mdl-shadow--${val}dp`,
      type: React.PropTypes.oneOf([2, 3, 4, 6, 8])
    }
  ]
})
class Card extends React.Component {

  render() {
    return <div {...this.props}/>;
  }
}

// Children
Card.Title = CardTitle;

export default Card;
