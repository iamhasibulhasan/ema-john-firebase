
import { useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from 'react';
import initializeAuthentication from './../Firebase/firebase.init';


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // ? Sign In Use Google
    const signInUsingGoggle = () => {
        return signInWithPopup(auth, googleProvider);
    }


    // ? Sign Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    // ? Observe User Auth State Change Or Not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, []);


    return {
        user,
        signInUsingGoggle,
        logOut
    }
}

export default useFirebase;