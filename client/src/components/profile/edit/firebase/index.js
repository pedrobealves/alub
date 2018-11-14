import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB_mvow6qwzEssQsPB06fs6bfO0OE7JjEE",
    authDomain: "rtmalub.firebaseapp.com",
    databaseURL: "https://rtmalub.firebaseio.com",
    projectId: "rtmalub",
    storageBucket: "rtmalub.appspot.com",
    messagingSenderId: "735949392910"
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}