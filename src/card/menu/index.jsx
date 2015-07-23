import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRCardMenu',
  blockClassName: 'mdl-card__menu'
})
class CardMenu extends React.Component {

  render() {
    return <div {...this.props}/>;
  }
}

export default CardMenu;
