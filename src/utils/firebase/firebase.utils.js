// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
} from "firebase/auth";

import { doc, getDoc, setDoc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA4V3-8dioUO2S1c2_eU_wcTWqtjSjQYQo",
    authDomain: "e-store-db-c7529.firebaseapp.com",
    projectId: "e-store-db-c7529",
    storageBucket: "e-store-db-c7529.appspot.com",
    messagingSenderId: "140299259628",
    appId: "1:140299259628:web:3f5337d720b3c071991fc9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            });
        } catch (error) {
            console.log("Error creating the user: ", error.message);
        }
    }

    return userDocRef;
};
