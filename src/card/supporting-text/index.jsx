import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDR:CardSupportingText',
  blockClassName: 'mdl-card__supporting-text'
})
class CardSupportingText extends React.Component {

  render() {
    return <div {...this.props} />;
  }
}

export default CardSupportingText;
