import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyBNbyHwvZkTl9hgKhU6BZe4eNl2JsevZAY",
    authDomain: "realtime-chatapp-53ae5.firebaseapp.com",
    projectId: "realtime-chatapp-53ae5",
    storageBucket: "realtime-chatapp-53ae5.appspot.com",
    messagingSenderId: "36559637806",
    appId: "1:36559637806:web:c59a75019d3fd3d05efebf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);