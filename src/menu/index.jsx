import React from 'react';
import mdlHook from '../lib/mdl-hook';
import MenuItem from './item';

@mdlHook({
  displayName: 'MDRMenu',
  blockClassName: 'mdl-menu',
  modifiers: [
    {
      prop: 'materialIcons',
      type: React.PropTypes.bool,
      className: 'material-icons'
    }
    {
      prop: 'topRight',
      type: React.PropTypes.bool,
      className: 'mdl-menu--top-right'
    }
    {
      prop: 'bottomRight',
      type: React.PropTypes.bool,
      className: 'mdl-menu--bottom-right'
    }
  ]
})
class Menu extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

Menu.Item = MenuItem;

export default Menu;
