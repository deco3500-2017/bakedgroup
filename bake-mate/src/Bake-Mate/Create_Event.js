import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
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
     image:"https://images.unsplash.com/photo-1464652149449-f3b8538144aa?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
     title:"",
     attendees:"",
   }


   this.send_event = this.send_event.bind(this);
   this.changeTitle = this.changeTitle.bind(this);

  }

  send_event(){
    var post = {
      id:this.state.title,
      title: this.state.title,
      host: this.state.host,
      avatar: this.state.avatar,
      image: this.state.image,
      difficulty:this.state.difficulty,
      description: this.state.desc,
      attendees: [{
        name:this.state.host,
        avatar:this.state.avatar
      }],
      attending:true,
      profile:true,
    }

    this.props.addPost(post);
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
          <TextField
          hintText="Difficulty"
          onChange = {(e) => this.changeDifficulty(e)}
          value={this.state.difficulty}
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
