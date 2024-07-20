import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const Auth = createContext();
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false)
        });
        return unSubscribe;
    }, []);
    const logOut = () => signOut(auth);
    const logIn = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);
    const signUp = async (email, password) => {
        console.log(typeof(email.value),password)
        return await createUserWithEmailAndPassword(auth, email, password);
    }
    const value = {
        currentUser, signUp, logIn, logOut
    }
    return (
        <Auth.Provider value={value}>
            {!loading && children}
        </Auth.Provider>
    )
};
