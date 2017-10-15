import React, { Component } from 'react';

import {getpostsDB as getPosts} from './firebase';
import * as firebase from 'firebase';
import Post from './Post';
import './Feed.css';


class Feed extends Component{

    constructor(props) {
      super(props);
      this.state = {
        posts: [

        {
          id:"abc",
          title: "Bake Cupcakes with me!",
          image: "https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/brian-chan-12168.jpg?alt=media&token=42a4d264-6b76-4279-a0bf-b42e8d921ff6",
          description: "I'd like to improve my icing skills on cupcakes. I've been practicing and am getting good, but would like to work with somebody to improve. I'm happy to host, and am free from 8-12 on Saturdays and Sundays. ",
          host:"John Smith",
          avatar:"https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/erik-lucatero-310633.jpg?alt=media&token=1b9b7396-4881-47fe-b3a7-97177cede48c",
          difficulty:"Difficulty: 3/5",
          attendees:[
            {
              name:"Jane Smith",
              avatar:"https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/erik-lucatero-310633.jpg?alt=media&token=1b9b7396-4881-47fe-b3a7-97177cede48c"
            },{
              name:"Bilbo Baggins",
              avatar:"https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/erik-lucatero-310633.jpg?alt=media&token=1b9b7396-4881-47fe-b3a7-97177cede48c"
            },
          ],
        },

      ],
       }; // <- set up react state
    }

    componentDidMount(){
      /* Create reference to messages in Firebase Database */

      let postsRef = firebase.database().ref('/posts/').orderByKey().limitToLast(100);
      postsRef.on('child_added', snapshot => {
        let post = {
          key: snapshot.id,
          id: snapshot.id,
          title: snapshot.title,
          host: snapshot.host,
          avatar: snapshot.avatar,
          image: snapshot.image,
          difficulty: snapshot.difficulty,
          description: snapshot.description,
          attendees: snapshot.attendees,
          timestamp: snapshot.timestamp
        };
        this.setState({ posts: [post].concat(this.state.posts) });
      });

    }



  render(){
    return(
      <div className="postBox">
          { /* Render the list of messages */
            this.state.posts.map( post =>
              <Post
                key={post.id}
                id={post.id}
                host={post.host}
                avatar={post.avatar}
                image={post.image}
                title={post.title}
                difficulty={post.difficulty}
                description={post.description}
                attendees={post.attendees}
                timestamp={post.timestamp}
              /> )

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
