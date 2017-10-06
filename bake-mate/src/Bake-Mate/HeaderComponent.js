import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Feed from './Feed';


import './HeaderComponent.css';

class HeaderComponent extends Component
{

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

export default HeaderComponent;
