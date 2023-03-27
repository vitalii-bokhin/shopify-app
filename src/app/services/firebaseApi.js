import { createApi } from '@reduxjs/toolkit/query/react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, collectionGroup, getDocs, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD3-Dggsh_sBjubQhflKmmLv22MCNqyys4",
    authDomain: "saapp-1d219.firebaseapp.com",
    projectId: "saapp-1d219",
    storageBucket: "saapp-1d219.appspot.com",
    messagingSenderId: "307777996192",
    appId: "1:307777996192:web:d09930c1f8ea819bc1d0c5",
    measurementId: "G-NLKM4ZZXQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

const firestoreQuery = () => async () => {
    const querySnapshot = await getDocs(collection(firestore, 'users'));

    return {
        data: querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
    };
}

export const userFirestoreApi = createApi({
    reducerPath: 'userFirestoreApi',
    baseQuery: firestoreQuery(),
    endpoints: (builder) => ({
        getData: builder.query({
            query: () => { },
        }),
    }),
});

export const { useGetDataQuery } = userFirestoreApi;