import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Send from 'material-ui/svg-icons/content/send';

import "./messages.css";

class Messages extends Component{
render(){
  return(
    <div>
    <div class="input_bar">
    <TextField
    hintText="Message"
    multiLine={true}
    />
    <IconButton>
    <Send/>
    </IconButton>
    </div>
    </div>
  );
}

}
export default Messages;
