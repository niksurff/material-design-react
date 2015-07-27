import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRSpinner',
  blockClassName: 'mdl-spinner mdl-js-spinner',
  modifiers: [
    {
      prop: 'isActive',
      type: React.PropTypes.bool,
      className: 'is-active'
    }
  ]
})
class Spinner extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default Spinner;
