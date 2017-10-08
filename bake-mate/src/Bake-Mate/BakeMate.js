import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Feed from './Feed';
import Messages from './Messages';
import Create_Event from './Create_Event';
import Buddies from './Buddies';
import Profile from './Profile';
import Settings from './Settings';
import {init as firebaseInit} from './firebase'

import './BakeMate.css';



class BakeMate extends Component{

  constructor(props) {
   super(props);
   firebaseInit();
   this.state = {
     open: false,
     feed:true,
     messages:false,
     create_event:false,
     buddies:false,
     profile:false,
     settings:false
   };
   this.changetoHome = this.changetoHome.bind(this);
   this.changetoMessage = this.changetoMessage.bind(this);
   this.changetoCreate_Event = this.changetoCreate_Event.bind(this);
   this.changetoBuddies = this.changetoBuddies.bind(this);
   this.changetoProfile = this.changetoProfile.bind(this);
   this.changetoSettings = this.changetoSettings.bind(this);



  }

  activePage(){
    if (this.state.feed){
      return(
        <Feed className="Feed"/>
      );
    }else if(this.state.messages){
      return(<Messages className="Messages"/>);
    }else if(this.state.create_event){
      return(<Create_Event className="Create_Event" />);
    }else if(this.state.buddies){
      return(<Buddies className="Buddies" />);
    }else if(this.state.profile){
      return(<Profile className="Profile" />);
    }else if(this.state.settings){
      return(<Settings className="Settings" />);
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});

  changetoHome(){
    this.setState({
      open: false,
      feed:true,
      messages:false,
      create_event:false,
      buddies:false,
      profile:false,
      settings:false
    });
  }

  changetoMessage(){
    this.setState({
      open: false,
      feed:false,
      messages:true,
      create_event:false,
      buddies:false,
      profile:false,
      settings:false
    });
  }

  changetoCreate_Event(){
    this.setState({
      open: false,
      feed:false,
      messages:false,
      create_event:true,
      buddies:false,
      profile:false,
      settings:false
    });
  }

    changetoBuddies(){
      this.setState({
        open: false,
        feed:false,
        messages:false,
        create_event:false,
        buddies:true,
        profile:false,
        settings:false
      });
    }

    changetoProfile(){
      this.setState({
        open: false,
        feed:false,
        messages:false,
        create_event:false,
        buddies:false,
        profile:true,
        settings:false
      });
    }

    changetoSettings(){
      this.setState({
        open: false,
        feed:false,
        messages:false,
        create_event:false,
        buddies:false,
        profile:false,
        settings:true
      });
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
                <MenuItem onClick={this.changetoHome} id="Home">Home</MenuItem>
                <MenuItem onClick={this.changetoMessage} id="Messages">Messages</MenuItem>
                <MenuItem onClick={this.changetoCreate_Event} id="Create_Event">Create Event</MenuItem>
                <MenuItem onClick={this.changetoBuddies} id="Buddies">Buddies</MenuItem>
                <MenuItem onClick={this.changetoProfile} id="Profile">Profile</MenuItem>
                <MenuItem onClick={this.changetoSettings} id="Settings">Settings</MenuItem>
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
