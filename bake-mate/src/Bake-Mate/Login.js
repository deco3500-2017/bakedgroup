import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import './Login.css';

class Login extends Component{

constructor(props){
  super(props);
  this.state = {
    login:props.login,
    dialog_open:false,
  }
}

handleToggle = () => this.setState({dialog_open: !this.state.dialog_open});


render(){

  return(
    <div>
      <Dialog
      open={false}
      />
      <div className="Login">
      <h1>Login</h1>
      <TextField
      hintText="Username"
      />
      <TextField
      hintText="Password"
      />
      <FlatButton
      label="Login!"

      />

      <p>Dont have an account?</p>
      <FlatButton
      label="Make Account"
      onClick={this.handleToggle}
      />
      </div>
    </div>

  );
}



}
export default Login;
