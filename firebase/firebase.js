import * as firebase from "firebase"

import firebaseConfig from '../config/firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export const loginWithEmail = (email, password) =>
    auth.signInWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();