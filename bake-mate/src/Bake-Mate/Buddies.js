import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';

class Buddies extends Component
{
  constructor(props){
    super(props);
    this.state = {
      buddies:[{
        name:"Jane Smith",
        avatar:"https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/erik-lucatero-310633.jpg?alt=media&token=1b9b7396-4881-47fe-b3a7-97177cede48c"
      },{
        name:"Bilbo Baggins",
        avatar:"https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/erik-lucatero-310633.jpg?alt=media&token=1b9b7396-4881-47fe-b3a7-97177cede48c"
      }]
    }

  }
  render(){
    return(
      <div>
      <ul className="attendeesList">
        {this.state.buddies.map( buddy =>
          <li className="attendeesObject" key={buddy.name}>
            <Avatar
            className="avatar"
              src={buddy.avatar}
              size={50}
            />
            <p>{buddy.name}</p>
            </li>
        )}
        </ul>
        </div>
    );
  }

}
export default Buddies;
