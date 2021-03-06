import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Post from './Post';


import './profile.css';

class Profile extends Component{

  constructor(props){
    super(props);
    this.state = {
      currentUser: props.user,
      attendees:[{
        name: "John Riser",
        avatar:
      "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?dpr=1&auto=format&fit=crop&w=1575&h=&q=60&cs=tinysrgb&crop=",
    },{
        name: "Tom Brown",
        avatar:"https://images.unsplash.com/photo-1492307584978-94258bce90e7?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
      }]
    };
  }

render(){
  return(
    <div className="background">
    <div className="Profile">
    <p><strong>Name:</strong> {this.state.currentUser.username}</p>
    <p><strong>Email:</strong> {this.state.currentUser.email}</p>
    </div>
    <Avatar
    className="profilepic"
    src={this.state.currentUser.avatar}
    size={60}
    />
    <div className="header"><strong>Posts:</strong></div>
    <div className="posts">

      <Post
      currentUser={this.state.currentUser}
      key="222"
      id="222"
      host={this.state.currentUser.username}
      avatar={this.state.currentUser.avatar}
      image="https://images.unsplash.com/photo-1478369402113-1fd53f17e8b4?dpr=1&auto=format&fit=crop&w=662&h=&q=60&cs=tinysrgb&crop="
      title="Lets bake some Pancakes!"
      difficulty="3 / 5"
      date_time="2nd of November, 2017"
      description="I would really like to bake some pancakes."
      attendees={this.state.attendees}
      timestamp="2"
      button={false}
      attending={true}
      profile={true}
      />

    </div>
    </div>
  );

}

}
export default Profile;
