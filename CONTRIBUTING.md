# Welcome to the contributing guide for Material Design React!

This file is a work in progress, your are welcome to contribute towards bringing this guide to completion.

## Most wanted

1. __Implement missing Components. [Read the issue](https://github.com/nikvm/material-design-react/issues/4)  and [read the guide](https://github.com/nikvm/material-design-react/wiki/Component-How-To)__
2. Improve `MDLHook` decorator. [Read the issue](https://github.com/nikvm/material-design-react/issues/10).
3. Write tests. [Read the issue](https://github.com/nikvm/material-design-react/issues/11).

## Contributing

1. Figure out what bugs you
2. Open an issue (or add your comment)
3. State you want to work on a particular problem.
3. Start [developing](#Developoing).

*Oh, and use [emoticons](http://www.emoji-cheat-sheet.com/) to your :heart: wishes :wink:*

## Developing

1. Fork the project.
2. Install dependencies via `npm install`.
3. Start a server for `src/examples` via `gulp serve`.
4. Write code and add `examples/`.
4. Build the project via `gulp`.
5. Make sure your code is lint-error free.
6. Make sure the project installs via `npm install -g .`
5. Open a pull request.

## Style guide

In lieu of a formal styleguide, take care to maintain the existing coding style. Lint your code using gulp with eslint (you may suggest `.eslintrc` changes).

Also we use Babel configured with `stage: 0`, meaning you can use all the (maybe) coming goodness.
