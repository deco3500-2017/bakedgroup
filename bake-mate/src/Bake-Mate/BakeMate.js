import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Feed from './Feed';
import Messages from './Messages';
import './BakeMate.css';

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

  var menuOptions = [
    "Home",
    "Messages",
    "Create_Event",
    "Buddies",
    "Profile",
    "Settings",
  ]

class BakeMate extends Component{

  constructor(props) {
   super(props);
   this.state = {
     open: false,
     feed:false,
     messages:true,
     create_event:false,
     buddies:false,
     profile:false,
     settings:false
   };
   this.changePage = this.changePage.bind(this);
  }

  activePage(){
    if (this.state.feed){
      return(
        <Feed className="Feed"/>
      );
    }else if(this.state.messages){
      return(<Messages className="Messages"/>);
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  changePage(){
    console.log(this.id);

    if(this.id === menuOptions[0]){
      this.changeState({feed:true, messages:false,
      create_event:false,
      buddies:false,
      profile:false,
      settings:false});
    }
    }
  render()
  {
    return(
        <div className="BakeMate">
          <AppBar
            title="BakeMate"
            onLeftIconButtonTouchTap={this.handleToggle}
            className="AppBar"
            />
            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={this.handleToggle}
              onItemTouchTap={this.handleToggle}
              >
              <Menu

                >
                <MenuItem onClick={this.changePage} id="Home">Home</MenuItem>
                <MenuItem onClick={this.changePage} id="Messages">Messages</MenuItem>
                <MenuItem onClick={this.changePage} id="Create_Event">Create Event</MenuItem>
                <MenuItem onClick={this.changePage} id="Buddies">Buddies</MenuItem>
                <MenuItem onClick={this.changePage} id="Profile">Profile</MenuItem>
                <MenuItem onClick={this.changePage} id="Settings">Settings</MenuItem>
              </Menu>
            </Drawer>
        <div className="background">
          {this.activePage()}
        </div>
    </div>
    );
  }

}
export default BakeMate;
