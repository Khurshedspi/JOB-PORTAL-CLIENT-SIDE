import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "./../../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state captured", currentUser?.email);
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        // for remove token after logout starts here
        axios
          .post("https://job-portal-server-side-phi.vercel.app/jwt", user, {withCredentials:true} )
          .then((res) => {
            console.log(res.data)
            setLoading(false);
          
          });
      }
      else{
        axios.post('https://job-portal-server-side-phi.vercel.app/logout', {}, {
          withCredentials:true
        })
        .then(res => {
          console.log('logout', res.data)
        setLoading(false);
        })
      }
 // for remove token after logout ends here


    });
    return () => {
      unsubscribe();
    };
  });

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
