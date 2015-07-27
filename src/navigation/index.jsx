import React from 'react';
import mdlHook from '../lib/mdl-hook';
import NavigationLink from './link';

@mdlHook({
  displayName: 'MDRNavigation',
  blockClassName: 'mdl-navigation',
  modifiers: [
    {
      prop: 'isActive',
      type: React.PropTypes.bool,
      className: 'is-active'
    }
  ]
})
class Navigation extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}

Navigation.Link = NavigationLink;

export default Navigation;
