import React from 'react';
import mdlHook from '../../decorator/mdl-hook';

@mdlHook({
  displayName: 'MDRCardTitleText',
  blockClassName: 'mdl-card__title-text',
  modifiers: [
    {
      prop: 'border',
      className: 'mdl-card--border',
      type: React.PropTypes.bool
    }
  ]
})
class CardTitleText extends React.Component {
  static propTypes = {
    level: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6])
  }
  static defaultProps = {
    level: 1
  }

  render() {
    let { level, ...otherProps } = this.props;

    return React.DOM[`h${level}`](otherProps);
  }
}

export default CardTitleText;
