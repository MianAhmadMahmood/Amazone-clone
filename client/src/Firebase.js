// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQTECcY69m6cyNgAi5ZFkVAyx_yYMtOHM",
  authDomain: "e-clone-75db1.firebaseapp.com",
  projectId: "e-clone-75db1",
  storageBucket: "e-clone-75db1.appspot.com",
  messagingSenderId: "41205025373",
  appId: "1:41205025373:web:ab13ce3458e73f145d5bb4",
  measurementId: "G-YPVT8RZKYK"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize services (Firestore and Auth)
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
