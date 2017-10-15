import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {getpostsDB as getPosts} from './firebase';
import * as firebase from 'firebase';
import './Feed.css';


var avatarImg = avatar;

class Feed extends Component{

    constructor(props) {
      super(props);
      this.state = {
        posts: [

        {
          id:"abc",
          title: "Bake Cupcakes with me!",
          image: "",
          description: "",
          host:"John Smith",
          hostAvatar: avatarImg
          ,
          attendees:[],
        },

      ],
       }; // <- set up react state
    }

    componentDidMount(){
      /* Create reference to messages in Firebase Database */

      let postsRef = firebase.database().ref('/posts/').orderByKey().limitToLast(100);
      postsRef.on('child_added', snapshot => {
        let post = {
          title: snapshot.val().name,
          id: snapshot.key,
          username: snapshot.username,
        };
        this.setState({ posts: [post].concat(this.state.posts) });
      });

    }



  render(){
    return(
      <div className="postBox">
          { /* Render the list of messages */
            this.state.posts.map( post =>
              <Card
                className="Standard-Post"
                key={post.id}>
              <CardHeader
              title={post.host}
              avatar={post.hostAvatar}
              />
            <CardMedia>
              <img src={post.image} alt=""/>
            </CardMedia>
            <CardTitle
              title={post.title}
            />
            </Card> )
          }
      </div>
    );

  }

  getInfo(){
     getPosts();
     setTimeout(2000);
  }

  componentWillUnmount(){
    this.setState({
      posts: [],
    });
  }

}

export default Feed;
