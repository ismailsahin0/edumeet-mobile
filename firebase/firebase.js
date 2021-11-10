import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export default firebaseConfig = {
    apiKey: "AIzaSyDSgQa-U3rOgcxX4w__8LNl858YvGzQyQY",
    authDomain: "edumeet-58d73.firebaseapp.com",
    projectId: "edumeet-58d73",
    storageBucket: "edumeet-58d73.appspot.com",
    messagingSenderId: "43750306031",
    appId: "1:43750306031:web:4d710b02247d3d87edeb1a",
    measurementId: "G-XGCXGC36KY"
};

// initialize firebase
initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();

export { auth };