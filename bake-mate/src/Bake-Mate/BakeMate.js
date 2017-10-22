import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Feed from './Feed';
import Messages from './Messages';
import Create_event from './Create_Event';
import Buddies from './Buddies';
import Profile from './Profile';
import Settings from './Settings';

import './BakeMate.css';



class BakeMate extends Component{

  constructor(props) {
   super(props);
   this.state = {
     login:true,
     open: false,
     feed:true,
     messages:false,
     create_event:false,
     buddies:false,
     profile:false,
     settings:false,
     feedClass:"Feed",
     loginClass:"login_false",
     bodyClass:"hidden",
     currentUser:{
       id: "11234",
       username: "Jodie Green",
       password: "TEST PASSWORD",
       email:'jodiegreen@gmail.com',
       avatar: "https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/allef-vinicius-151778.jpg?alt=media&token=cc49743a-983d-4166-a4e6-b1202ec845f4",
     },
     pageTitle:"BakeMate",
     version:"0.3",
     post: []
   };
   this.changetoHome = this.changetoHome.bind(this);
   this.changetoMessage = this.changetoMessage.bind(this);
   this.changetoCreate_event = this.changetoCreate_event.bind(this);
   this.changetoBuddies = this.changetoBuddies.bind(this);
   this.changetoProfile = this.changetoProfile.bind(this);
   this.changetoSettings = this.changetoSettings.bind(this);

  }

  activePage(){
    if (this.state.feed){
      return(
      <Feed
      currentUser={this.state.currentUser}
      className="Feed"
      post={this.state.post}
      />
    );

    }else if(this.state.messages){
      return(
        <div>
        <Messages className="Messages"/>
        </div>
              );
    }else if(this.state.create_event){
      return(
    <div>
      <Create_event
      className="Create_event"
      currentUser={this.state.currentUser}
      addPost={(post) => this.addPost(post)}
       />
      </div>
      );
    }else if(this.state.buddies){

      return(
      <div>
      <Buddies className="Buddies" />
      </div>
      );
    }else if(this.state.profile){

      return(
      <div>
        <Profile className="Profile"
        user={this.state.currentUser}/>
      </div>
      );
    }else if(this.state.settings){

      return(
      <div>
        <Settings className="Settings" />
      </div>
      );
    }

  }

  handleToggle = () => this.setState({open: !this.state.open});


  changetoHome(){
    this.setState({
      open: false,
      feed:true,
      messages:false,
      create_event:false,
      buddies:false,
      profile:false,
      settings:false,
      feedClass:"Feed",
      pageTitle:"BakeMate"
    });
  }

  changetoMessage(){
    this.setState({
      open: false,
      feed:false,
      messages:true,
      create_event:false,
      buddies:false,
      profile:false,
      settings:false,
      feedClass:"hideFeed",
      pageTitle:"Messages"


    });
  }

  changetoCreate_event(){
    this.setState({
      open: false,
      feed:false,
      messages:false,
      create_event:true,
      buddies:false,
      profile:false,
      settings:false,
      feedClass:"hideFeed",
      pageTitle:"Create Event"

    });
  }

    changetoBuddies(){
      this.setState({
        open: false,
        feed:false,
        messages:false,
        create_event:false,
        buddies:true,
        profile:false,
        settings:false,
        feedClass:"hideFeed",
        pageTitle:"Buddies"


      });
    }

    changetoProfile(){
      this.setState({
        open: false,
        feed:false,
        messages:false,
        create_event:false,
        buddies:false,
        profile:true,
        settings:false,
        feedClass:"hideFeed",
        pageTitle:"Profile"


      });
    }

    changetoSettings(){
      this.setState({
        open: false,
        feed:false,
        messages:false,
        create_event:false,
        buddies:false,
        profile:false,
        settings:true,
        feedClass:"hideFeed",
        pageTitle:"Settings"
      });
    }

    componentDidMount(){

    }

    checkLogin(){
    }

    getUser(user){
      this.setState({currentUser:user}, () => {
      });

    }

    addPost(post){
      var statepost = this.state.post;
      statepost.push(post);
      this.setState({post:statepost}, () => {
        console.log(this.state.post)
      });
    }

  render(){
    return(
        <div className="BakeMate">
        <div>
          <AppBar
            title={this.state.pageTitle}
            onLeftIconButtonTouchTap={this.handleToggle}
            className="AppBar"
            />
            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={this.handleToggle}
              >
              <Menu>
                <MenuItem onClick={this.changetoHome} id="Home">Home</MenuItem>
                <MenuItem onClick={this.changetoMessage} id="Messages">Messages</MenuItem>
                <MenuItem onClick={this.changetoCreate_event} id="Create_Event">Create Event</MenuItem>
                <MenuItem onClick={this.changetoBuddies} id="Buddies">Buddies</MenuItem>
                <MenuItem onClick={this.changetoProfile} id="Profile">
                Profile</MenuItem>
                <MenuItem onClick={this.changetoSettings} id="Settings">Settings</MenuItem>
              </Menu>
              <p className="version">version: {this.state.version}</p>
            </Drawer>

          <div className="background">
            {this.activePage()}
          </div>
        </div>
    </div>
    );
  }

}
export default BakeMate;
