// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import {
    doc,
    getDoc,
    setDoc,
    getFirestore,
    writeBatch,
    collection,
    getDocs,
    query,
} from "firebase/firestore";
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
    signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocs = async (collectionName, objectsToAdd) => {
    const collectionRef = collection(db, collectionName);

    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
};

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
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
                ...additionalInformation,
            });
        } catch (error) {
            console.log("Error creating the user: ", error.message);
        }
    }

    return userDocRef;
};

export const createAuthWithUserAndPassward = async (email, passward) => {
    if (!email || !passward) return;

    return await createUserWithEmailAndPassword(auth, email, passward);
};

export const signInAuthWithUserAndPassward = async (email, passward) => {
    if (!email || !passward) return;

    return await signInWithEmailAndPassword(auth, email, passward);
};

export const signOutAuth = async () => {
    return await signOut(auth);
};

export const onAuthChangedListner = (callback) =>
    onAuthStateChanged(auth, callback);

// get docs
export const getCategoriesData = async () => {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);

    const categroriesMap = querySnapshot.docs.reduce((acc, snapshot) => {
        const { title, items } = snapshot.data();

        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    return categroriesMap;
};
