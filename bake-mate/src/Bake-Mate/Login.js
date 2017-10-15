import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

import Image_Preview from './Image_Preview';
import {addUser as sendUser} from './firebase';
import {getusersDB as getUsers} from './firebase';
import * as firebase from 'firebase';

import './Login.css';

var loginBool = false;

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
    password:"",
    userList:[],
    hidden:'',
    avatar: {}
  }
  this.handleToggle = this.handleToggle.bind(this);
  this.CreateAccount = this.CreateAccount.bind(this);
  this.changeText1 = this.changeText1.bind(this);
  this.changeText2 = this.changeText2.bind(this);
  this.changeText3 = this.changeText3.bind(this);
  this.changeText4 = this.changeText4.bind(this);
  this.changeText5 = this.changeText5.bind(this);
  this.LoginAttempt = this.LoginAttempt.bind(this);

}


handleToggle(){this.setState({dialog_open: !this.state.dialog_open});}

getProfileImage(image){
  this.setState({avatar:image});
}

CreateAccount(){

  if(this.state.password_new === this.state.password_confirm_new){
    console.log('true');
    sendUser(this.state.username_new, this.state.password_new,this.state.avatar);

    this.setState({
        username:this.state.username_new,
        password:this.state.password_new
      }, () => {
        this.handleToggle();
        this.LoginAttempt();
        console.log('Adding user');
      });
  }
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

changeText4(e){
  this.setState({username:e.target.value});
}

changeText5(e){
  this.setState({password:e.target.value});
}

LoginAttempt(){
  console.log('started login function');
  var username = this.state.username;
  var password = this.state.password;
  var userList = this.state.userList;

  console.log(username);
  console.log(password);
  console.log(userList);

  userList.forEach(function(object){
    if(username === object.username && password === object.password){
      loginBool = true;

      console.log(loginBool);
    }else{
    }
  });

  if(loginBool){
    this.setState({login:true, hidden:"hidden_true"}, () => {
      this.props.callbackParent(true);
    });
    this.props.getUserName(this.state.username);

  }
}

componentWillMount(){
  let usersRef = firebase.database().ref('/users/').orderByKey();
  usersRef.on('child_added', snapshot => {
    let user = { username: snapshot.val().username, id: snapshot.key, password: snapshot.val().password };
    this.setState({ userList: [user].concat(this.state.userList)});
  });

}

render(){

  return(
    <div className={this.state.hidden}>
    <div>
      <Dialog
      open={this.state.dialog_open}
      onRequestClose={this.handleToggle}
      >
      <h2>Create Account</h2>

      <Image_Preview
      getProfileImage = {(image) => this.getProfileImage(image)}
              />

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
      onChange={this.changeText4}
      value={this.state.username}
      />
      <TextField
      hintText="Password"
      type="password"
      onChange={this.changeText5}
      value={this.state.password}
      />
      <FlatButton
      label="Login!"
      onClick={this.LoginAttempt}
      />

      <p>Dont have an account?</p>
      <FlatButton
      label="Make Account"
      onClick={this.handleToggle}
      />
      </div>
    </div>
    </div>

  );
}



}
export default Login;

export const login_status = () => {
  return(loginBool);

};
