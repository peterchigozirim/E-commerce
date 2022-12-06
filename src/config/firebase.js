// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCJlH33a6nXR2AfW8SzJPAcmXEi1pZKw3c",
  authDomain: "vue-ecommerce001.firebaseapp.com",
  projectId: "vue-ecommerce001",
  storageBucket: "vue-ecommerce001.appspot.com",
  messagingSenderId: "899361318924",
  appId: "1:899361318924:web:f93afeeb96e2ae3298e629"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
    db,
    auth
  }