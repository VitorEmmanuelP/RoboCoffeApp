import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBmn-CaN8E_2INGc5UkidmXzw3KfC7svbI",
  authDomain: "robocoffe-b0b2f.firebaseapp.com",
  projectId: "robocoffe-b0b2f",
  storageBucket: "robocoffe-b0b2f.appspot.com",
  messagingSenderId: "54026175857",
  appId: "1:54026175857:web:fd1f730fdb099c9c7ea2d0",
  measurementId: "G-5X758QG37G",
};

export const Firebase = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(Firebase);

export const FirebaseDataBase = getFirestore(Firebase);

export const FirebaseStorage = getStorage(Firebase);

export const RealTimeDataBase = getDatabase();
