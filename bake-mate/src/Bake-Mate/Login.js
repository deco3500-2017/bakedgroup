import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import addUser from 'firebase';

import './Login.css';

class Login extends Component{

constructor(props){
  super(props);
  this.state = {
    login:props.login,
    dialog_open:false,
    username_new:"",
    password_new:"",
    password_confirm_new:"",
    username:"",
    password:""
  }
  this.handleToggle = this.handleToggle.bind(this);
  this.CreateAccount = this.CreateAccount.bind(this);
  this.changeText1 = this.changeText1.bind(this);
  this.changeText2 = this.changeText2.bind(this);
  this.changeText3 = this.changeText3.bind(this);
}


handleToggle(){this.setState({dialog_open: !this.state.dialog_open});}



CreateAccount(){
  console.log(this.state.username_new);
  console.log(this.state.password_new);
  console.log(this.state.password_confirm_new);

  this.handleToggle();
}

changeText1(e){
  this.setState({username_new:e.target.value});
}
changeText2(e){
  this.setState({password_new:e.target.value});
}

changeText3(e){
  this.setState({password_confirm_new:e.target.value});
}

render(){

  return(
    <div>
      <Dialog
      open={this.state.dialog_open}
      onRequestClose={this.handleToggle}
      >
      <h2>Create Account</h2>
      <TextField
      hintText="UserName"
      onChange={this.changeText1}
      value={this.state.username_new}
      />
      <TextField
      hintText="Password"
      onChange={this.changeText2}
      value={this.state.password_new}
      type="password"
      />
      <TextField
      hintText="Confirm Password"
      onChange={this.changeText3}
      value={this.state.password_confirm_new}
      type="password"

      />
      <FlatButton
      label="Go!"
      onClick={this.CreateAccount}
      />
      </Dialog>


      <div className="Login">
      <h1>Login</h1>
      <TextField
      hintText="Username"
      />
      <TextField
      hintText="Password"
      type="password"

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
