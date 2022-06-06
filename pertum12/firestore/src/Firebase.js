import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const settings = { timestampsInSnapshots: true };

const config = {
    apiKey: "AIzaSyCaGR1kVy4VzTFexgoJ5Z8XsgE26xVK6tI",
    authDomain: "reactfirestore-7fa6c.firebaseapp.com",
    projectId: "reactfirestore-7fa6c",
    storageBucket: "reactfirestore-7fa6c.appspot.com",
    messagingSenderId: "456787027188",
    appId: "1:456787027188:web:3c58d197c2d49b3626aaa1"
  };

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore().settings(settings);

export default firebase;