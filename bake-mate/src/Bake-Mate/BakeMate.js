import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Feed from './Feed';

var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyBGwyz97yB9MlRJX9DG6MoLlwREzVOVthw",
    authDomain: "bake-mate.firebaseapp.com",
    databaseURL: "https://bake-mate.firebaseio.com",
    projectId: "bake-mate",
    storageBucket: "bake-mate.appspot.com",
    messagingSenderId: "46970780431"
  };
  firebase.initializeApp(config);

class BakeMate extends Component{

  constructor(props) {
   super(props);
   this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render()
  {
    return(
      <div className="HeaderComponent">
      <AppBar
      title="BakeMate"
      onLeftIconButtonTouchTap={this.handleToggle}
      />
      <Drawer
      open={this.state.open}
      docked={false}
      onRequestChange={this.handleToggle}
      >
          <MenuItem>Home</MenuItem>
          <MenuItem>Messages</MenuItem>
          <MenuItem>Create Event</MenuItem>
          <MenuItem>Buddies</MenuItem>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
        </Drawer>
      <Feed/>
      </div>
    );
  }

}
export default BakeMate;
