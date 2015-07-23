import React from 'react';
import {
  Button,
  // Card,
  // CardTitle,
  // CardTitleText,
  // CardSubtitleText,
  // CardSupportingText,
  // CardMedia,
  // CardMenu,
  // CardActions
} from '../index'; // material-design-react

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
        <Button raised colored ripple>standard</Button>
        <Button disabled>disabled</Button>
        <Button colored raised>raised colored</Button>
        <Button raised ripple>raised ripple</Button>
        <Button display="raised">use prop display="raised"</Button>
        <Button fab colored ripple><i className={'material-icons'}>add</i></Button>
        <Button icon ripple><i className={'material-icons'}>add</i></Button>
        <Button className="example-custom-red">Custom style</Button>
{/*        <Card shadow="3">
          <Card.Title>
            <Card.TitleText border>
              Card.TitleText
            </Card.TitleText>
          </Card.Title>
        </Card>
        <Card shadow="8">
          <CardTitle border>
            <CardTitleText level="1">
              CardTitleText level 1
            </CardTitleText>
            <CardSubtitleText border>
              Subtitle
            </CardSubtitleText>
          </CardTitle>
          <CardMedia>
            CardMedia
          </CardMedia>
          <CardSupportingText border>
            A man once sat under a tree
          </CardSupportingText>
          <CardMenu>
            <Button icon className="material-icons">add</Button>
          </CardMenu>
          <CardActions border>
            <Button display="raised">
              action!
            </Button>
          </CardActions>
        </Card>
        <br/>
        <Card
          title="the card title"
          titleBorder
          subtitle="a subtitle"
          media={<div>Some media</div>}
          supporting="supporting text"
          actions={[<Button colored>GO!</Button>]}
          actionsBorder
          shadow="8" />
*/}
      </Examples>
    );
  }
}

React.render(<App />, document.getElementById('app'));
