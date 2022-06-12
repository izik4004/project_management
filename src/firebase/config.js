import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyAnW8juUUNOcLCE6X9x9mhZgTQ8W_6eMZY",
    authDomain: "management-f2698.firebaseapp.com",
    projectId: "management-f2698",
    storageBucket: "management-f2698.appspot.com",
    messagingSenderId: "1016427161119",
    appId: "1:1016427161119:web:1518341ff8685477b4172a"
  };
  


  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()


  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }