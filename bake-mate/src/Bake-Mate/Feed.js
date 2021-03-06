import React, { Component } from 'react';

import Post from './Post';
import './Feed.css';


class Feed extends Component{

    constructor(props) {
      super(props);
      this.state = {
        currentUser: props.currentUser,
		     upcoming: false,
        posts: [

        {
          id:"abc",
          title: "Bake Cupcakes with me!",
          image: "https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/brian-chan-12168.jpg?alt=media&token=42a4d264-6b76-4279-a0bf-b42e8d921ff6",
          description: "I'd like to improve my icing skills on cupcakes. I've been practicing and am getting good, but would like to work with somebody to improve. I'm happy to host, and am free from 8-12 on Saturdays and Sundays. ",
          host:"John Smith",
          avatar:"https://firebasestorage.googleapis.com/v0/b/bake-mate.appspot.com/o/erik-lucatero-310633.jpg?alt=media&token=1b9b7396-4881-47fe-b3a7-97177cede48c",
          difficulty:"Difficulty: 3/5",
          date_time:'Date and Time: TBD',
          attendees:[
            {
              name:"Mac Ronnal",
              avatar:"https://images.unsplash.com/photo-1489980478712-2ab535aa775f?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop="
            },{
              name:"Violet Frosting",
              avatar:"https://images.unsplash.com/photo-1464863979621-258859e62245?dpr=1&auto=format&fit=crop&w=1266&h=&q=60&cs=tinysrgb&crop="
            }
          ],
        },
        {
          id:'001',
          title: "Brownies",
          host: "Tom Brown",
          avatar:"https://images.unsplash.com/photo-1492307584978-94258bce90e7?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
          image:"https://images.unsplash.com/photo-1504205758521-892897f3a28e?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
          difficulty: "Difficulty: 2/5",
          date_time: "Date and Time: To be Decided",
          description: "I want to bake some sweet sweet chocolate brownies. Looking for 3 buddies to join in this endeavour. Want to discuss more details of when and where with interested people.",
          attendees: [{
            name: "Jane Dough",
            avatar:"https://images.unsplash.com/photo-1497350166004-48ec9adb78bb?dpr=1&auto=format&fit=crop&w=1268&h=&q=60&cs=tinysrgb&crop="
          }],
            timestamp: "1",
          },
        {
          id: "002",
          title: "French Baguette",
          host: "Jane Dough",
          avatar:"https://images.unsplash.com/photo-1497350166004-48ec9adb78bb?dpr=1&auto=format&fit=crop&w=1268&h=&q=60&cs=tinysrgb&crop=",
          image:"https://images.unsplash.com/photo-1456765447332-d79762cdcbe4?dpr=1&auto=format&fit=crop&w=2988&h=&q=60&cs=tinysrgb&crop=",
          difficulty: "Difficulty: 3/5",
          date_time: "Date and Time: November 19th, 2017 at 10am",
          description: "Looking for 2 Buddies to bake some bread with. Looking to be moderate difficulty, will send out location in group chat a couple days prior to bake day. Looking forward to breaking bread with you all.",
          attendees: [{
            name: "John Riser",
            avatar:
          "https://images.unsplash.com/photo-1487309078313-fad80c3ec1e5?dpr=1&auto=format&fit=crop&w=1575&h=&q=60&cs=tinysrgb&crop=",
          }],
          timestamp: "2",
        },
        {
          id: "003",
          title: "Multi Coloured Cake",
          host: "Violet Frosting",
          avatar:"https://images.unsplash.com/photo-1464863979621-258859e62245?dpr=1&auto=format&fit=crop&w=1266&h=&q=60&cs=tinysrgb&crop=",
          image:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?dpr=1&auto=format&fit=crop&w=2298&h=&q=60&cs=tinysrgb&crop=",
          difficulty: "Difficulty: 5/5",
          date_time: "Date and Time: To be Decided",
          description: " I’m looking to learn how to bake an amazing multi coloured cake and meet some new people. Want to see if there is any interest before committing to a time. Can’t wait to bake with you all.",
          attendees: [{
            name: "Imogen Sparkles",
            avatar: "https://images.unsplash.com/photo-1501644530579-edc925ccfd19?dpr=1&auto=format&fit=crop&w=3300&h=&q=60&cs=tinysrgb&crop=",
          }],
          timestamp: "3",
        },
        {
          id: "004",
          title: "Choc Chip Cookies",
          host: "Chip Nuttle",
          avatar:"https://images.unsplash.com/photo-1499057625772-bafa601ee80c?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
          image:"https://images.unsplash.com/photo-1485745655111-3272a37e76a5?dpr=1&auto=format&fit=crop&w=1268&h=&q=60&cs=tinysrgb&crop=",
          difficulty: "Difficulty: 1/5",
          date_time: "Date and Time: To be Decided",
          description: "Looking to bake some kick ass chocolate chip cookies. The more the merrier so looking for up to 6 buddies to have fun baking with. If you are interested and free over next few weeks we should set up a time all of us can bake these cookies.",
          attendees: [{
            name: "Jane Dough",
            avatar: "https://images.unsplash.com/photo-1497350166004-48ec9adb78bb?dpr=1&auto=format&fit=crop&w=1268&h=&q=60&cs=tinysrgb&crop=",
            },
            {
            name: "Tom Brown",
            avatar:"https://images.unsplash.com/photo-1492307584978-94258bce90e7?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
          },],
          timestamp: "4",
        },
        {
          id: "005",
          title: "Macarons",
          host: "Mac Ronnal",
          avatar:"https://images.unsplash.com/photo-1489980478712-2ab535aa775f?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
          image:"https://images.unsplash.com/photo-1464652149449-f3b8538144aa?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
          difficulty: "Difficulty: 3/5",
          date_time: "Date and Time: October 25th, 2017 at 1pm",
          description: "Want 2 buddies to learn to make macarons with. Just looking to have a bit a fun along the way. So if that interests you please come along.",
          attendees: [{
            name: "Ron Cream",
            avatar: "https://images.unsplash.com/photo-1485274466491-6c0baa1cfc2a?dpr=1&auto=format&fit=crop&w=3150&h=&q=60&cs=tinysrgb&crop=",
                    }],
          timestamp: "5",

          }
        ],
		relatedPosts: [],
    post: props.post

    }; // <- set up react state
	this.changetoUpcoming = this.changetoUpcoming.bind(this);
	this.changetoNormal = this.changetoNormal.bind(this);
    }

	changetoUpcoming(){
		var related = [];
		var posts = this.state.posts;

		for (let p in posts){
			let contains = false;
			for (let a in posts[p].attendees){
				var attendees = posts[p].attendees;
				if (attendees[a].name === this.state.currentUser.username){
					contains = true;
				}
			}
			if (posts[p].host === this.state.currentUser.username || contains === true){
				related.push(posts[p]);
			}
		}
		this.setState({
			upcoming: true,
			relatedPosts: related
		});
	}

	changetoNormal(){
		this.setState({
			upcoming: false
		});
	}

  componentDidMount(){
  		var related = [];
  		var posts = this.state.posts;

      console.log(this.state.post)
      for(let p in this.state.post){
        posts.unshift(this.state.post[p]);
      }

  		for (let p in posts){
  			let contains = false;
  			for (let a in posts[p].attendees){
  				var attendees = posts[p].attendees;
  				if (attendees[a].name === this.state.currentUser.username){
  					contains = true;
  				}
  			}
  			if (posts[p].host === this.state.currentUser.username || contains === true){
  				related.push(posts[p]);
  			}
  		}
  		this.setState({
  			relatedPosts: related
  		});
    }



  render(){
  	if (this.state.upcoming === true){
  	  return(
  		<div>
  		<div>
  		  <div className="upcoming selected" onClick={this.changetoNormal} id="all">All Events</div>
  		  <div className="upcoming" onClick={this.changetoUpcoming} id="Upcoming">Upcoming Events</div>
  		</div>
  		  <div className="postBox">
              { /* Render the list of messages */
                this.state.relatedPosts.map( post =>
                  <Post
                    currentUser={this.state.currentUser}
                    key={post.id}
                    host={post.host}
                    avatar={post.avatar}
                    image={post.image}
                    title={post.title}
                    difficulty={post.difficulty}
                    date_time={post.date_time}
                    description={post.description}
                    attendees={post.attendees}
                    timestamp={post.timestamp}
                    button={true}
                    profile={false}

                  /> )

              }
            </div>
  		</div>
  	  );
  	} else {
  		  return(
  		<div>
  		<div>
  		  <div className="upcoming" onClick={this.changetoNormal} id="all">All Events</div>
  		  <div className="upcoming selected" onClick={this.changetoUpcoming} id="Upcoming">Upcoming Events</div>
  		</div>
  		  <div className="postBox">
              { /* Render the list of messages */
                this.state.posts.map( post =>
                  <Post
                    currentUser={this.state.currentUser}
                    key={post.id}
                    host={post.host}
                    avatar={post.avatar}
                    image={post.image}
                    title={post.title}
                    difficulty={post.difficulty}
                    date_time={post.date_time}
                    description={post.description}
                    attendees={post.attendees}
                    timestamp={post.timestamp}
                    button={true}
                    profile={false}

                  /> )

              }
            </div>
  		</div>
  	  );
  	}
  }


  componentWillUnmount(){
    this.setState({
      posts: [],
    });
  }

}

export default Feed;
