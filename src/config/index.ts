import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDOxKjfr2yZGQOxFIU7wS2r_41zGE9j4YM",
  authDomain: "robocoffe-6df23.firebaseapp.com",
  projectId: "robocoffe-6df23",
  storageBucket: "robocoffe-6df23.appspot.com",
  messagingSenderId: "286973181169",
  appId: "1:286973181169:web:f87750543a565aa5bbfd50",
  measurementId: "G-NSWB6VSHDL",
};

export const Firebase = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(Firebase);

export const FirebaseDataBase = getFirestore(Firebase);

export const FirebaseStorage = getStorage(Firebase);

export const RealTimeDataBase = getDatabase();
