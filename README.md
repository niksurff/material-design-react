# Material Design React

This project attempts to provide [React](https://github.com/facebook/react) Components wrapping Google's [Material Design Lite](https://github.com/google/material-design-lite) Components.

**This is just a brain dump and very much work in progress. Also I am committed to pushing this forward. If you'd like to contribute have a first look at the code. If you want to use the library maybe come back at a later time. Thanks.**


## Installation

`npm install --save material-design-react`

## Usage
```javascript
import React from 'react';
import { Button } from 'material-design-react';
// or
// import Button from 'material-design-react/lib/button';

let coloredButton = <Button colored ripple>I am Colored</Button>;
```

## Contributing

*Not just yet, sorry*


## Developing
*Building is cumbersome at the moment, sorry.*

1. Clone the repo.
2. `[sudo] npm install && gulp`
3. Start a server in `examples` directory (ex. `python -m SimpleHTTPServer`)
4. Make some changes
5. `gulp clean && gulp`
6. Rinse and repeat


## History

Have a look at the [changelog](CHANGELOG.md).


## Credits

* Google's [Material Design Lite](https://github.com/google/material-design-lite)
* Facebook's [React](https://github.com/facebook/react)
* Yan Foto's Article [React Components with Material Design Lite](http://quaintous.com/2015/07/09/react-components-with-mdl/)
* Zeno Rocha's [README template](https://gist.github.com/zenorocha/4526327)
* The [npm dependencies](package.json) authors
* Everyone I forgot

## License

MIT
