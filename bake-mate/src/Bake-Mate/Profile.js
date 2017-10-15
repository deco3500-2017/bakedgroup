import React, { Component } from 'react';

class Profile extends Component{

  constructor(props){
    super(props);
    console.log(props)
    this.state = {
      currentUser: props.user
    };
  }

render(){
  return(<h1>{this.state.currentUser}</h1>);

}

}
export default Profile;
