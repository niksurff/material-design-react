import React from 'react';
import mdlHook from '../../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRNavigationLink',
  blockClassName: 'mdl-navigation__link',
  modifiers: [
  ]
})
class NavigationLink extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default NavigationLink;
