# CardTitleText

http://www.getmdl.io/components/index.html#cards-section


## Usage

```javascript
import Card from 'material-design-react/lib/card';

let myCard = (
  <Card shadow="2">
    <Card.Title border>
      <Card.TitleText level="2">
        A Card's Title
      </Card.TitleText>
    </Card.Title>
    {/* ... */}
  </Card>
);
```

You may also import and use `CardTitleText` directly.

```javascript
// import { CardTitleText } from 'material-design-react';
import CardTitleText from 'material-design-react/lib/card/title-text';

let myCardTitleText = (
  <CardTitleText>
    A Card's Title
  </CardTitleText>
);
```


## Properties

Property | Type | Default | Effect | Remarks
-------- | ---- | ------- | ------ | -------
level | one of: 1, 2, 3, 4, 5, 6 | 1 | Sets heading level | Defines DOM element `<h1>` through `<h2>`


## Parent

[Card](../README.md)


## Notes
*none*
