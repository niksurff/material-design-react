import React from 'react';
import mdlHook from '../../decorator/mdl-hook';

@mdlHook({
  displayName: 'MDRCardSubtitleText',
  blockClassName: 'mdl-card__subtitle-text'
})
class CardSubtitleText extends React.Component {

  render() {
    return <div {...this.props} />;
  }
}

export default CardSubtitleText;
