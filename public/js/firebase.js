const firebaseConfig = {
  apiKey: "AIzaSyCOLezXgS8UzkZjJDMRcVBj8TvQVfrN9Fg",
  authDomain: "penspace-blog.firebaseapp.com",
  projectId: "penspace-blog",
  storageBucket: "penspace-blog.appspot.com",
  messagingSenderId: "1078669622860",
  appId: "1:1078669622860:web:f49447144f8cd076857ee9"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
