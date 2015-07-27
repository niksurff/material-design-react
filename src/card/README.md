# Card

http://www.getmdl.io/components/index.html#cards-section


## Usage

```javascript
// import { Card } from 'material-design-react';
import Card from 'material-design-react/card';

let myCard = (
  <Card shadow="2">
    <Card.Title border>
      <Card.TitleText>Look, a Card!</Card.TitleText>
      <Card.SubtitleText>It is, indeed.</CardSubtitleText>
    </Card.Title>

    <Card.Media>
      {/* ... */}
    </Card.Media>

    <Card.SupportingText>
      Some text to support the obvious.
    </Card.SupportingText>

    <Card.Actions border>
      <Button ripple>Do it!</Button>
    </Card.Actions>

    <Card.Menu>
      <Button icon className="material-icons">add</Button>
    </Card.Menu>
  </Card>
);
```

You may also use a shorthand with properties.

```javascript
let myCard = (
  <Card
    shadow="2"
    title="Look, a Card!"
    titleLevel="3"
    subtitle="It is, indeed."
    supporting="Some text to support the obvious."
    actions={[<Button>Act on it.</Button>, <Button accent>Do it!</Button>]}
    actionsBorder />
);
```


## Properties

Property | Type | Default | Effect | Remarks
-------- | -----| ------- | ------ | -------
shadow | one of: 2, 3, 4, 6, 8, 16 | undefined | Assigns shadow with variable depths | Depths 5 and 7 don't exist
title | node | undefined | Applies provided nodes as heading | -
titleLevel | one of: 1, 2, 3, 4, 5, 6 | 1 | Sets title's heading level | Sets html elements `<h1>` through `<h6>`
titleBorder | bool| undefined | Gives title container a border | -
subtitle | node | undefined | Applies provided node as subtitle | -
supporting | node | undefined | Applies provided node as supporting text | -
media | node | undefined | Includes provided node in media container | -
actions | node | undefined | Includes provided node in actions container | -
actionsBorder | bool | undefined | Gives actions container a border | -
menu | node | undefined | Includes provided node in menu container | Usually a mdl/mdr icon button plus menu

## Children

* [Title](./title/README.md)
* [TitleText](./title-text/README.md)
* [SubtitleText](./subtitle-text/README.md)
* [SupportingText](./supporting-text/README.md)
* [Media](./media/README.md)
* [Actions](./actions/README.md)
* [Menu](./menu/README.md)


## Notes

When using `Card` with props the order in which children are rendered is as follows:

1. `title`
2. `subtitle`
3. `supporting`
4. `media`
5. `children` (prop or actual)
6. `actions`
7. `menu`

If your use case seeks a different order, use `Card` with children instead or mix as needed (as `children` will be rendered in any case).
