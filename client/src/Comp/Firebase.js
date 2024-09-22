import firebase from 'firebase'
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCQTECcY69m6cyNgAi5ZFkVAyx_yYMtOHM",
    authDomain: "e-clone-75db1.firebaseapp.com",
    projectId: "e-clone-75db1",
    storageBucket: "e-clone-75db1.appspot.com",
    messagingSenderId: "41205025373",
    appId: "1:41205025373:web:ab13ce3458e73f145d5bb4",
    measurementId: "G-YPVT8RZKYK"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth =firebase.auth()

  export {db,auth}