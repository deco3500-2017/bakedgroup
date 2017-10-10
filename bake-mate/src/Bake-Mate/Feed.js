import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {getpostsDB as getPosts} from './firebase';
import * as firebase from 'firebase';
import './Feed.css';


class Feed extends Component{

    constructor(props) {
      super(props);
      this.state = {
        posts: [],
       }; // <- set up react state
    }

    componentDidMount(){
      /* Create reference to messages in Firebase Database */

      let postsRef = firebase.database().ref('/posts/').orderByKey().limitToLast(100);
      postsRef.on('child_added', snapshot => {
        let post = { name: snapshot.val().name, id: snapshot.key };
        this.setState({ posts: [post].concat(this.state.posts) });
      });

    }



  render(){
    return(
      <div className="postBox">
      <h1>Feed</h1>
          { /* Render the list of messages */
            this.state.posts.map( post =>
              <Card
                className="Standard-Post"
                key={post.id}>
              <CardHeader>
                {post.name}
              </CardHeader>
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
