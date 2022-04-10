import { useEffect, useState } from "react";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from "../firebase.init";


const auth=getAuth()
const googleProvider = new GoogleAuthProvider(app)
const useFirebase=()=>{

const [user, setUser]=useState({})
useEffect(()=>{
  onAuthStateChanged(auth, user=>{
      setUser(user)
  })
},[]);
const signInWithGoogle=()=>{
 signInWithPopup(auth,googleProvider).then((result)=>{
     const user =result.user;
     setUser(user)
     console.log(user)
 })
 .catch((error)=>{
     console.log(error)
 })
}

const handleSignOut=()=>{
    signOut(auth).then(()=>{
        console.log('sign out')
    }).catch((error)=>{
        console.log(error)
    })
}
return{user,signInWithGoogle,handleSignOut}
}
export default useFirebase;