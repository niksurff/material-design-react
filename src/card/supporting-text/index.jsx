import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRCardSupportingText',
  blockClassName: 'mdl-card__supporting-text'
})
class CardSupportingText extends React.Component {

  render() {
    return <div {...this.props} />;
  }
}

export default CardSupportingText;
