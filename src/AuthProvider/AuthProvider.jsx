import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading ,setloading ]=useState(true)

    const loginGoogle = ()=>{
        setloading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const singInEmail =(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const createUser = (email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logout = ()=>{
        setloading(true)
        return signOut(auth)
    }
   useEffect(()=>{
    const Unsubcribe = onAuthStateChanged(auth,(Currentuser)=>{
        setUser(Currentuser)
        setloading(false)

    })
    return ()=> {
        Unsubcribe()
    }
   },[])


const authInfo ={
    user,
    loading,
    loginGoogle,
    singInEmail,
    createUser,
    logout

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;