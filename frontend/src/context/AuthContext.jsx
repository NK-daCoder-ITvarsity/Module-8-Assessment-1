import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


const AuthContext = createContext();

// check if the user is available in the context
export const useAuth = () => {
    return useContext(AuthContext)
}

// Auth Provider component

export const AuthProvider = ({children}) => {
    // define if user is there/available
    const [currentUser, setCurrentUser] = useState(null);

    const [loading, setLoading] = useState(true);

    // register user
    const registerUser = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password)
    }

    // sign up with google
    const provider = new GoogleAuthProvider();

    provider.setCustomParameters({
        prompt: 'select_account' // Ensures account chooser is displayed
    });

    const signInWithGoogle = async () => {
        return signInWithPopup(auth, provider);
    };


    // rendering into the parents AuthContext
    const value = {
        currentUser, registerUser, loginUser, signInWithGoogle
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}