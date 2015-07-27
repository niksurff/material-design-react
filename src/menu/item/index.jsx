import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRMenuItem',
  blockClassName: 'mdl-menu__item',
  modifiers: [
  ]
})
class MenuItem extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default MenuItem;
