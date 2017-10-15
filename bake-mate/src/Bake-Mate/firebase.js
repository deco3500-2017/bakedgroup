import * as firebase from 'firebase';
import postModel from './models/post';
import userModel from './models/user';


let database
export const init = () => {
  let config = {
    apiKey: "AIzaSyBGwyz97yB9MlRJX9DG6MoLlwREzVOVthw",
    authDomain: "bake-mate.firebaseapp.com",
    databaseURL: "https://bake-mate.firebaseio.com",
    projectId: "bake-mate",
    storageBucket: "bake-mate.appspot.com",
    messagingSenderId: "46970780431"
  }
  firebase.initializeApp(config)
  database = firebase.database()
}

// retrieve from firebase
// return promise object
export const getpostsDB = () => {
  console.log("Getting posts");
  database.ref('/posts/').once("value").then( function(data) {
    return data.val();
});
};

export const getusersDB = () => {
  database.ref('/users/').once("value").then(function(data) {
    return data.val();
  });
}

export const addUser = (username, password, avatar) => {
  let key = database.ref('users').push().key
  let model = userModel(key, username, password, avatar)
  return database.ref('/users/' + key).set(model);
}


// add new post
export const addPost = (title, host, avatar, image, difficulty, description, attendees) => {
  console.log(title, host, avatar, image, difficulty, description, attendees);
  let key = database.ref('posts').push().key
  let model = postModel(key, title, host, avatar, image, difficulty, description, attendees, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('/posts/'+ key).set(model)
}
