import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWCeHE-9WrcM89SY6LUEThRNO04rGhEQY",
  authDomain: "next-firebase-app-7da1b.firebaseapp.com",
  projectId: "next-firebase-app-7da1b",
  storageBucket: "next-firebase-app-7da1b.appspot.com",
  messagingSenderId: "969165833070",
  appId: "1:969165833070:web:6d092ec426481b611b777f",
};

// Next can try to run this file twice in dev mode. This can throw an error hence the condition.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

/// helper functions

export const getUserWithUsername = async (username) => {
  const usersRef = firestore.collection("users");
  const query = usersRef.where("username", "==", username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
};

// Converts firestore document to JSON.
export const postToJSON = (doc) => {
  const data = doc.data();
  return {
    ...data,
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
};

// converts firestore timestamp to a number.
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
