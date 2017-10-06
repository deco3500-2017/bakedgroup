import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './Feed.css';

class Feed extends Component{

  render(){
    return(
      <Card className="Standard-Post">
        <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="images/jsa-128.jpg"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/pancakes.jpg?alt=media&token=33f89272-83c5-44c4-a5ad-2cabcea56b33" alt="" />
    </CardMedia>
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
      </Card>
    );
  }

}

export default Feed;
