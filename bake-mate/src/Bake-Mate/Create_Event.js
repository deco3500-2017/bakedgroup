import React, { Component } from 'react';
import {addPost as addPost} from './firebase';

import FlatButton from 'material-ui/FlatButton';

class Create_event extends Component{

  constructor(props) {
   super(props);
   this.state = {
     name:"Bill",
     activity:"Bake"
   }
   this.send_event = this.send_event.bind(this);

  }

  send_event(){
    addPost("bob");
    console.log('Done boi');
  }

  render(){
    return(<FlatButton onClick={this.send_event}>Create Event</FlatButton>);
  }

}
export default Create_event;
