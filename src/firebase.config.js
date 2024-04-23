import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAtHrvouxTs07QrcJUj1fAdEunf9H3L93s",
    authDomain: "salt-lick-b91bd.firebaseapp.com",
    databaseURL: "https://salt-lick-b91bd-default-rtdb.firebaseio.com",
    projectId: "salt-lick-b91bd",
    storageBucket: "salt-lick-b91bd.appspot.com",
    messagingSenderId: "243789952437",
    appId: "1:243789952437:web:f7635ad8cd62ba98d5d5fc"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
