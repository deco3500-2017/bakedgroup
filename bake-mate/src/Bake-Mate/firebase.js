import * as firebase from 'firebase';
import postModel from './models/post';


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
    console.log(data.val());
    return data.val();
});
};



// add new post
export const addPost = (name) => {
  let key = database.ref('posts').push().key
  let model = postModel(key, name, firebase.database.ServerValue.TIMESTAMP)
  return database.ref('/posts/'+ key).set(model)
}
