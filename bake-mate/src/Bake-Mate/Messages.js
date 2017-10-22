import React, { Component } from 'react';

import Conversation from './Conversation';

import "./messages.css";

class Messages extends Component{

constructor(){
  super()
  this.state = {
    conversations :[
      {
        key:"001",
        name:"John Smith",
        avatar: "https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/erik-lucatero-310633.jpg?alt=media&token=1b9b7396-4881-47fe-b3a7-97177cede48c",
        text:"Hey so, what time would you like to meet?",
        read:false

      },
      {
        key:"002",
        name:"Tom Brown",
        avatar: "https://images.unsplash.com/photo-1492307584978-94258bce90e7?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
        text:"Do you know what ingredients we will need for then next meeting?",
        read:true,
      },{
        key:"003",
        name:"Jane Dough",
        avatar: "https://images.unsplash.com/photo-1497350166004-48ec9adb78bb?dpr=1&auto=format&fit=crop&w=1268&h=&q=60&cs=tinysrgb&crop=",
        text:"Jane Dough sent an image",
        read:true,
      }
    ]
  }
}

render(){
  return(
    <div className="messageHandler">
      {this.state.conversations.map(conversation =>
        <Conversation
          key={conversation.key}
          name={conversation.name}
          avatar={conversation.avatar}
          text={conversation.text}
          read={conversation.read}
        />)}
    </div>
  );
}

}
export default Messages;
