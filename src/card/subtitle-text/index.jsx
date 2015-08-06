import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDR:CardSubtitleText',
  blockClassName: 'mdl-card__subtitle-text'
})
class CardSubtitleText extends React.Component {

  render() {
    return <div {...this.props} />;
  }
}

export default CardSubtitleText;
