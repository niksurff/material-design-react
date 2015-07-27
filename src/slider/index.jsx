import React from 'react';
import mdlHook from '../lib/mdl-hook';

@mdlHook({
  displayName: 'MDRSlider',
  blockClassName: 'mdl-slider mdl-js-slider',
  modifiers: [
  ]
})
class Slider extends React.Component {

  render() {
    return (
      <div {...this.props} />
    );
  }
}


export default Slider;
