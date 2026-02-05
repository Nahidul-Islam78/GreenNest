
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import app from "../firebase/firebase.config"
//create context
export const AuthContext = createContext();

//get app
const auth = getAuth(app);
 
const AuthProvider = ({ children }) => {

  //signup
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  //signin
  const signinUser = (email,password)=> {
  return signInWithEmailAndPassword(auth,email,password)
  }

  const authData = {
    createUser,
    signinUser,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};;

export default AuthProvider;