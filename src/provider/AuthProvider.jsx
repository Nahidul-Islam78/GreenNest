
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config"
//create context
export const AuthContext = createContext();

//get app
const auth = getAuth(app);
 
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user)
  //signup
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //signin
  const signinUser = (email,password)=> {
  return signInWithEmailAndPassword(auth,email,password)
  }
  //set observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return ()=>{unsubscribe()}
  },[])

  const authData = {
    createUser,
    signinUser,
    user,
    setUser
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};


export default AuthProvider;