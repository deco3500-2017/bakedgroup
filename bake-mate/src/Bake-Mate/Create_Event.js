import React, { Component } from 'react';
import {addPost as addPost} from './firebase';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import './Create_Event.css';

class Create_event extends Component{

  constructor(props) {
   super(props);
   this.state = {
     name:"",
     desc:"",
     host:"",
     picture:"",
     difficulty:"",


   }
   this.send_event = this.send_event.bind(this);
   this.changeText = this.changeText.bind(this);

  }

  send_event(){
    addPost(this.state.name);
    console.log('Done boi');
  }

  changeText(e, String){
    this.setState({String:e.target.value});
  }

  render(){
    return(
      <div>
        <div className="Create_Event">
          <TextField
          hintText="Name"
          onChange = {(e) => this.changeText(e, "Name")}
          value={this.state.name}
          />
          <FlatButton
          onClick={this.send_event}
          label="Create Event"
          primary={true}
          />
        </div>
      </div>
    );
  }

}
export default Create_event;
