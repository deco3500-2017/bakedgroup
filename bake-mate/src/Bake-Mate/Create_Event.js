import React, { Component } from 'react';
import {addPost as addPost} from './firebase';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import ImagePreview from './Image_Preview';
import './Create_Event.css';

var string: "";


class Create_event extends Component{

  constructor(props) {
   super(props);
   this.state = {
     desc:"",
     host:props.currentUser.username,
     picture:"",
     difficulty:"",
     avatar:props.currentUser.avatar,
     image:"",
     title:"",
     difficulty:"",
     attendees:"",
   }


   this.send_event = this.send_event.bind(this);
   this.changeTitle = this.changeTitle.bind(this);

  }

  send_event(){

    addPost(this.state.title, this.state.host, this.state.avatar, this.state.image, this.state.difficulty, this.state.desc, this.state.attendees);
  }

  changeTitle(e){
    this.setState({title: e.target.value});
  }
  changeDesc(e){
    this.setState({desc: e.target.value});
  }
  changeDifficulty(e){
    this.setState({difficulty: e.target.value});
  }

  getImage(postImage){
    this.setState({image: postImage});
  }


  render(){
    return(
      <div>
        <div className="Create_Event">
          <TextField
          hintText="Name"
          onChange = {(e) => this.changeTitle(e)}
          value={this.state.title}
          />
          <TextField
          hintText="Description"
          onChange = {(e) => this.changeDesc(e)}
          value={this.state.desc}
          />
          <ImagePreview
          useAvatar={false}
          getImage = {(image) => this.getImage(image)}
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
