import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyAhxEczkQiuGubBMAMSr7i0z5d92cOHtZk",
  authDomain: "fir-crud-33ba6.firebaseapp.com",
  projectId: "fir-crud-33ba6",
  storageBucket: "fir-crud-33ba6.appspot.com",
  messagingSenderId: "1008173001928",
  appId: "1:1008173001928:web:f26a98c5a6ae9718a789fd"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);