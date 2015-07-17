import React from 'react';
import CardMenu from './menu';
import CardMedia from './media';
import CardTitle from './title';
import CardActions from './actions';
import CardTitleText from './title-text';
import mdlHook from '../decorator/mdl-hook';
import CardSubtitleText from './subtitle-text';
import CardSupportingText from './supporting-text';

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
Card.SubtitleText = CardSubtitleText;
Card.SupportingText = CardSupportingText;
Card.Media = CardMedia;
Card.Actions = CardActions;
Card.Menu = CardMenu;

export default Card;
