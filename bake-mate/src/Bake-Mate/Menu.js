import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


class Menu extends Component
{

  constructor(props) {
   super(props);
   this.state = {open: false};
 }

  handleToggle = () => this.setState({open: !this.state.open});


  render()
  {
    return(
      <Drawer open={this.state.open}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
    );

  }

}

export default Menu;
