import React from 'react';
import mdlHooked from './decorators/mdlHooked';

@mdlHooked({
  block: 'button',
  modifiers: [ 'fab', 'colored', 'accent', 'raised'],
  ripple: true,
  // jsExtras: ['ripple-effect']
  // ugradable: true - default
})
class Button extends React.Component {
  static propTypes = {
    // floating action button
    fab: React.PropTypes.bool,
    // add color
    colored: React.PropTypes.bool,
    // add accent color
    accent: React.PropTypes.bool,
    // raised button
    raised: React.PropTypes.bool,
    // ripple effect
    ripple: React.PropTypes.bool
  }

  static defaultProps = {
    fab: false,
    colored: false,
    accent: false,
    raised: false,
    ripple: false
  }

  render() {
    return <button {...this.props}>{this.props.children}</button>;
  }
}

export default Button;
