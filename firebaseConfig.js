import { initializeApp } from "firebase/app";

import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// 1. create new project on firebase console
// 2. enable email and password auth provider in authentication
// 3. create a web app and copy the firebseConfigs below

const firebaseConfig = {
  apiKey: "AIzaSyAIy46OY4cAmG1fQaZZ2b0LKKBSvyerP9Y",
  authDomain: "fir-chat-14dfe.firebaseapp.com",
  projectId: "fir-chat-14dfe",
  storageBucket: "fir-chat-14dfe.appspot.com",
  messagingSenderId: "1035135343883",
  appId: "1:1035135343883:web:d2142726e7cab6b9e5d60e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomRef = collection(db, "rooms");
