import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const loginFrameworkInit = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            console.log(res.user)
            const { displayName, email, photoURL } = res.user;
            const signedInUser = { name: displayName, email, image: photoURL }
            // storeAuthToken();
            return signedInUser;
        })
        .catch(err => {
            const signedInUser = { message: err.message }
            return signedInUser;
        });
}

// Set Auth Token when
const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(idToken => {
            sessionStorage.setItem('token', idToken);
        }).catch(error => {
            console.log(error.message)
        });
}