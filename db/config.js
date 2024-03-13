

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx-XFno0OVCXegj1uuCociXEVnpRiT-wY",
  authDomain: "bans-61716.firebaseapp.com",
  projectId: "bans-61716",
  storageBucket: "bans-61716.appspot.com",
  messagingSenderId: "64621767028",
  appId: "1:64621767028:web:5cc4f7cbfe9f875191a421"
};


const app = initializeApp(firebaseConfig);


// init services 
const db = getFirestore(app);

const storage = getStorage(app);

const auth = getAuth(app)

export { db, auth, storage }