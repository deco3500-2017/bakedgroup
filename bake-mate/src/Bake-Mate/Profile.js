import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

import './profile.css';

class Profile extends Component{

  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      currentUser: props.user
    };
  }

render(){
  return(
    <div>
    <p><strong>Name:</strong> {this.state.currentUser.username}</p>
    <p><strong>Email:</strong> {this.state.currentUser.email}</p>
    <Avatar
    className="profilepic"
    src={this.state.currentUser.avatar}
    size={60}
    />
    </div>
  );

}

}
export default Profile;
