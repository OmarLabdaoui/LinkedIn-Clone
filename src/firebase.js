import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAZVtZHpT2ieZRo2h6T-mE1Ndq6cx7J-5Y",
    authDomain: "test-clone3.firebaseapp.com",
    projectId: "test-clone3",
    storageBucket: "test-clone3.appspot.com",
    messagingSenderId: "903212698506",
    appId: "1:903212698506:web:0a423f3d14528123679673",
    measurementId: "G-GQL3W7X79E"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
export { auth }
export default db
