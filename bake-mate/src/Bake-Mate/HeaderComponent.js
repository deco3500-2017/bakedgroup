import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Menu from './Menu';

import './HeaderComponent.css';

class HeaderComponent extends Component
{

  constructor(props) {
   super(props);
   this.state = {open:false};
 }

  handleToggle(){
    Menu.setState({open: !this.state.open});
  }

  render()
  {
    return (
      <div className="HeaderComponent">
      <AppBar
      title="BakeMate"
      onLeftIconButtonTouchTap={this.handleToggle()}
      />
      <Menu/>
      </div>
    );
  }
}

export default HeaderComponent;
