import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5yqDyYj_mLhLRynDBOGgAu2xuz0pM6nY",
  authDomain: "test-a00f0.firebaseapp.com",
  databaseURL: "https://test-a00f0.firebaseio.com",
  projectId: "test-a00f0",
  storageBucket: "test-a00f0.appspot.com",
  messagingSenderId: "1030238252120",
  appId: "1:1030238252120:web:1f329d4c143141ff496e2d",
  measurementId: "G-B3G0G6EGG2",
};

const fire = firebase.initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// export default  firestore = firebase.firestore();

// const baseDb = myFirebase.firestore();
export default fire;
