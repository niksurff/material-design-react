import React from 'react';
import mdlHook from '../lib/mdl-hook';
import CardMenu from './menu';
import CardMedia from './media';
import CardTitle from './title';
import CardActions from './actions';
import CardTitleText from './title-text';
import CardSubtitleText from './subtitle-text';
import CardSupportingText from './supporting-text';

@mdlHook({
  displayName: 'MDRCard',
  blockClassName: 'mdl-card mdl-js-card',
  modifiers: [
    {
      prop: 'shadow',
      type: React.PropTypes.oneOf([2, 3, 4, 6, 8, 16]),
      classNameFn: (val) => `mdl-shadow--${val}dp`
    }
  ]
})
class Card extends React.Component {
  static propTypes = {
    title: React.PropTypes.node,
    titleLevel: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    titleBorder: React.PropTypes.bool,
    subtitle: React.PropTypes.node,
    supporting: React.PropTypes.node,
    media: React.PropTypes.node,
    actions: React.PropTypes.node,
    actionsBorder: React.PropTypes.bool,
    menu: React.PropTypes.node,
    children: React.PropTypes.node
  }

  static defaultProps = {
    titleLevel: 1
  }

  render() {
    let {
      title,
      titleLevel,
      titleBorder,
      subtitle,
      supporting,
      media,
      actions,
      actionsBorder,
      menu,
      children,
      ...otherProps
    } = this.props;

    let renderedTitle = renderTitle({title, titleLevel, titleBorder, subtitle});
    let renderedSupporting = renderSupporting({supporting});
    let renderedMedia = renderMedia({media});
    let renderedActions = renderActions({actions, actionsBorder});
    let renderedMenu = renderMenu({menu});

    return (
      <div {...otherProps}>
        {renderedTitle}
        {renderedSupporting}
        {renderedMedia}
        {children}
        {renderedActions}
        {renderedMenu}
      </div>
    );
  }
}

function renderTitle(props) {
  let Subtitle = props.title && props.subtitle
    ? <CardSubtitleText children={props.subtitle} />
    : null;
  if (props.title) return (
    <CardTitle border={props.titleBorder}>
      <CardTitleText children={props.title} level={props.titleLevel} />
      {Subtitle}
    </CardTitle>
  );
  return null;
}

function renderSupporting(props) {
  if (props.supporting) return (
    <CardSupportingText children={props.supporting}/>
  );
  return null;
}

function renderMedia(props) {
  if (props.media) return (
    <CardMedia children={props.media}/>
  );
  return null;
}

function renderActions(props) {
  if (props.actions) return (
    <CardActions children={props.actions} border={props.actionsBorder}/>
  );
  return null;
}

function renderMenu(props) {
  if (props.menu) return (
    <CardMenu children={props.menu}/>
  );
  return null;
}

Card.Title = CardTitle;
Card.TitleText = CardTitleText;
Card.SubtitleText = CardSubtitleText;
Card.SupportingText = CardSupportingText;
Card.Media = CardMedia;
Card.Actions = CardActions;
Card.Menu = CardMenu;

export default Card;
