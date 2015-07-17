# Material Design React (MDR)

:warning: Work in progress. Updates rolling in every other day.

A *pragmatic* [React](https://github.com/facebook/react) implementation of [Material Design Lite](https://github.com/google/material-design-lite) (MDL).


## Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [Components](#components)
- [Histroy](#history)
- [Credits](#credits)
- [License](#license)


## Introduction

*Pragmatic* &ndash; because if you know how to use MDL you already know how to use MDR.

Most MDL BEM **blocks and elements translate to MDR Components** and **modifiers translate to boolean properties**. In addition Components may have added some extra sugar.

### An Example

Given MDL markup:

```html
<button class="mdl-button mdl-js-button mdl-button--fab">FAB BUTTON</button>
```

 becomes:

 ```html
<Button fab>FAB BUTTON</Button>
 ```

 or &ndash; considering that
      *fab*, *miniFab*, *icon* and *raised* are mutually exclusive &ndash; we can use the display property:

```html
<Button display="fab">FAB BUTTON</Button>
```


## Getting Started


### Installation

npm:
```bash
npm install --save material-design-react
```

*Please file an issue if you need additional means of installation.*


### Usage
Include the Material Design Lite CSS and JavaScript files in each HTML page in your project.  
More info: http://www.getmdl.io/started/index.html#download

```html
<!-- index.html -->
<link rel="stylesheet" href="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.indigo-pink.min.css" />
<script src="https://storage.googleapis.com/code.getmdl.io/1.0.0/material.min.js"></script>
```

In your project's JS files import the components you need.

```javascript
/* app.jsx */
import React from 'react';
import { Button } from 'material-design-react';
// or
import Button from 'material-design-react/lib/button';
// or
var MDR = require('material-design-react');
var Button = MDR.Button;

let coloredButton = <Button colored ripple>I am colored</Button>;
```

## Contributing

*Coming soon*


## History

Have a look at the [changelog](CHANGELOG.md).


## Components

*Links point to a component's readme.*

- [x] [Button](src/button/README.md)
- [ ] [Card](src/card/README.md)
  - [x] [CardTitle](src/card/title/README.md)
  - [x] [CardTitleText](src/card/title-text/README.md )
  - [x] [CardSubtitleText](src/card/subtitle-text/README.md)
  - [x] [CardMedia](src/card/media/README.md)
  - [x] [CardSupportingText](src/card/supporting-text/README.md)
  - [ ] CardActions
- ...*coming*


## Credits

- [Contributors](https://github.com/nikvm/material-design-react/graphs/contributors) for contributing
- [Google](https://github.com/google) for [Material Design Lite](https://github.com/google/material-design-lite)
- [Facebook](https://github.com/facebook) for [React](https://github.com/facebook/react)
- [Yan Foto](https://github.com/yan-foto) for his article [React Components with Material Design Lite](http://quaintous.com/2015/07/09/react-components-with-mdl/)
- [Zeno Rocha](https://github.com/zenorocha) for his [README template](https://gist.github.com/zenorocha/4526327)
- NPM module authors for [this project's dependencies](package.json)

*Get in contact if you think you belong here.*

## License

This project is licensed under the terms of the [MIT](LICENSE.md) license.
