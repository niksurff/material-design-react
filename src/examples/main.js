import React from 'react';
import Button from '../lib/button';

class Examples extends React.Component {
  render() {
    let children = React.Children.map(this.props.children, (child) => {
      return <div>{child}</div>;
    });
    return (
      <div>{children}</div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <Examples>
        <Button>standard</Button>
        <Button disabled>diabled</Button>
        <Button colored raised>raised colored</Button>
        <Button raised ripple>ripple</Button>
        <Button fab colored ripple><i className={'material-icons'}>add</i></Button>
        <Button className="example-custom-red">Custom style</Button>
      </Examples>
    );
  }
}

React.render(<App />, document.getElementById('app'));
