import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';


import "./messages.css";

class Conversation extends Component{

  constructor(props){
    super(props);
    this.state = {
      key: props.id,
      name: props.name,
      avatar: props.avatar,
      text: props.text,
      read:props.read,
    }
  }

  componentDidMount(){
    var displayString = this.state.text;
    if (displayString.length > 20){
      displayString = displayString.substring(0,20);
      this.setState({text: displayString});
    }
  }

  render(){
    if(this.state.read){
      return(
      <div className="Conversation">
        <Avatar
        src={this.state.avatar}
        size={60}
        />
        <div className="info">
          <p className="name">{this.state.name}</p>
          <p className="text">{this.state.text} ...</p>
        </div>
      </div>
      );
    }else{
    return(
      <div className="Conversation">
        <Avatar
        src={this.state.avatar}
        size={60}
        />
        <div className="info">
          <p className="name_unread">{this.state.name}</p>
          <p className="text_unread">{this.state.text} ...</p>
        </div>
      </div>
    );
  }
  }

}
export default Conversation;
