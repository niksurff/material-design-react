import React from 'react';
import CardTitle from './title';
import CardTitleText from './title-text';
import mdlHook from '../decorator/mdl-hook';

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
Card.TitleText = CardTitleText;

export default Card;
