import { createContext, useState, useEffect } from "react";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth"
import {auth} from "../firebase/firebase-config"

export const UserContext = createContext()

export function UserContextProvider(props) {


  const signUp = (email, pwd) => createUserWithEmailAndPassword(auth, email, pwd);
  const signIn = (email, pwd) => signInWithEmailAndPassword(auth, email, pwd);
  const verifyEmail = () => sendEmailVerification(auth.currentUser);
  const changePwd = (email) => sendPasswordResetEmail(auth);

  const [currentUser, setCurrentUser] = useState();
  const [loadingData, setLoadingData] = useState(true);


  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser)
      setLoadingData(false)
    })

    return unsubscribe;

  }, []);

  console.log(currentUser);

  return (
    <UserContext.Provider value={{signUp, currentUser, signIn, verifyEmail, changePwd}}>
      {!loadingData && props.children}
    </UserContext.Provider>
  )
}