import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

import './buddies.css';

class Buddies extends Component
{
  constructor(props){
    super(props);
    this.state = {
      buddies:[{
        name:"Mac Ronnal",
        avatar:"https://images.unsplash.com/photo-1489980478712-2ab535aa775f?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop="
      },{
        name:"Violet Frosting",
        avatar:"https://images.unsplash.com/photo-1464863979621-258859e62245?dpr=1&auto=format&fit=crop&w=1266&h=&q=60&cs=tinysrgb&crop="
      },{
        name: "Jane Dough",
        avatar:"https://images.unsplash.com/photo-1497350166004-48ec9adb78bb?dpr=1&auto=format&fit=crop&w=1268&h=&q=60&cs=tinysrgb&crop="
      },{
        name: "John Riser",
        avatar:
      "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?dpr=1&auto=format&fit=crop&w=1575&h=&q=60&cs=tinysrgb&crop=",
    },{
        name: "Tom Brown",
        avatar:"https://images.unsplash.com/photo-1492307584978-94258bce90e7?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
      },{
        name:"John Smith",
        avatar: "https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/erik-lucatero-310633.jpg?alt=media&token=1b9b7396-4881-47fe-b3a7-97177cede48c"
      }]
    }

  }
  render(){
    return(
      <div>
      <ul className="buddiesList">
        {this.state.buddies.map( buddy =>
          <li className="buddiesObject" key={buddy.name}>
            <Avatar
            className="avatar"
              src={buddy.avatar}
              size={80}
            />
            <p className="nameText">{buddy.name}</p>
            </li>
        )}
        </ul>
        </div>
    );
  }

}
export default Buddies;
