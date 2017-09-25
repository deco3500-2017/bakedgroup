import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class HeaderComponent extends Component
{
  render()
  {
    return (
      <div className="HeaderComponent">
      <AppBar title="BakeMate"/>
      </div>
    );
  }
}

export default HeaderComponent;
