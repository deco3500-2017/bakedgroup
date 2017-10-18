import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';


import './Feed.css';


const buttonStyle = {
  color:'#fff'
}

class Post extends Component{

  constructor(props){
    super();
    this.state = {
      open:false,
      id: props.id,
      host: props.host,
      hostAvatar: props.avatar,
      image:props.image,
      title:props.title,
      difficulty:props.difficulty,
      date_time:props.date_time,
      description:props.description,
      attendees:props.attendees,
    }
  }

  togglePost = () => this.setState({open: !this.state.open});


render(){
  if(this.state.open){
  return(
    <Card
      className="Expanded-Post"
      key={this.state.id}>
    <CardHeader
    title={this.state.host}
    avatar={this.state.hostAvatar}
    children = {
      <IconButton
      onClick={this.togglePost}
      className="IconButton"
      >

      <ExpandLess/>
      </IconButton>
    }
    />
  <CardMedia>
    <img src={this.state.image} alt=""/>
  </CardMedia>
  <CardTitle
    title={this.state.title}
    subtitle= {this.state.difficulty}
  />
  <CardText>{this.state.description}</CardText>
  <CardText>{this.state.date_time}</CardText>
  <CardText><strong>Attendees:</strong>
  <ul className="attendeesList">
    {this.state.attendees.map( attendee =>
      <li className="attendeesObject" key={attendee.name}>
        <Avatar
        className="avatar"
          src={attendee.avatar}
          size={30}
        />
        <p>{attendee.name}</p>
        </li>
    )}
    </ul>
    </CardText>
    <CardActions>
      <RaisedButton
        label="join"
        backgroundColor="#26c6da"
        fullWidth={true}
        labelStyle={buttonStyle}
      />
    </CardActions>
  </Card>
    )
  }else{
    return(
      <Card
        className="Standard-Post"
        key={this.state.id}>
      <CardHeader
      title={this.state.host}
      avatar={this.state.hostAvatar}
      />
    <CardMedia>
      <img src={this.state.image} alt=""/>
    </CardMedia>
    <CardTitle
      title={this.state.title}
    />
    <CardActions>
      <FlatButton
        fullWidth={true}
        icon={<ExpandMore/>}
        onClick={this.togglePost}
      />
    </CardActions>
    </Card>
    )
  }
}

}

export default Post;
