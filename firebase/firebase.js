import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export default firebaseConfig = {
    apiKey: "AIzaSyBvnIHDk5W2tjq2htod7Nz6a91nMxD8UIA",
    authDomain: "edumeet-5fadf.firebaseapp.com",
    projectId: "edumeet-5fadf",
    storageBucket: "edumeet-5fadf.appspot.com",
    messagingSenderId: "197756201025",
    appId: "1:197756201025:web:62d6d0596e432f0555fec0",
    measurementId: "G-CF8JMLSC7B"
};

// initialize firebase
initializeApp(firebaseConfig);

// initialize auth
const auth = getAuth();

export { auth };