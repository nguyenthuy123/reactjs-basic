import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAP6ksoNnbkHMlXJCznHA8RxuixI8DX-pM",
    authDomain: "restaurantapp-ff7f5.firebaseapp.com",
    databaseURL: "https://restaurantapp-ff7f5-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-ff7f5",
    storageBucket: "restaurantapp-ff7f5.appspot.com",
    messagingSenderId: "957579404060",
    appId: "1:957579404060:web:e2069ba891bc07287850d9",
    measurementId: "G-FCQECTLGGY"
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage}