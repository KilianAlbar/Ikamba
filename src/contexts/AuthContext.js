import React, {useContext, useState, useEffect} from "react";
import { auth } from '../firebase';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){

    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(Email, Password){
        return auth.createUserWithEmailAndPassword(Email, Password);
    }

    function login(Email, Password){
        return auth.signInWithEmailAndPassword( Email, Password)
    }

    function logout() {
        return auth.signOut()
    }

    function resetPassword(Email){
        return auth.sendPasswordResetEmail(Email)
    }

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        logout,
        signup,
        resetPassword
    }

    return(
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}