import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

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
    <h1>{this.state.currentUser.username}</h1>
    <Avatar
    src={this.state.currentUser.avatar}
    size={120}
    />
    </div>
  );

}

}
export default Profile;
