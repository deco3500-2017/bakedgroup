import React, { Component } from 'react';
import {Card, CardTitle, CardText} from 'material-ui/Card';

import './Feed.css';

class Feed extends Component{

  render(){
    return(
      <Card className="Standard-Post">
        <CardTitle>Yo!</CardTitle>
        <CardText>This is the things</CardText>
      </Card>
    );
  }

}

export default Feed;
