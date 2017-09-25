import React, { Component } from 'react';
import BakeMate from './Bake-Mate/BakeMate';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

class App extends Component
{
  render()
  {
    return (
      <MuiThemeProvider>
      <BakeMate/>
      </MuiThemeProvider>
    );
  }
}

export default App;
