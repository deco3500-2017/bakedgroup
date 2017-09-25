import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import Feed from './Feed';

class BakeMate extends Component{

  render()
  {
    return(
      <div>
      <HeaderComponent />
      <Feed />
      </div>
    );

  }

}
export default BakeMate;
