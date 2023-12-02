import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,

  signInWithPhoneNumber,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import { RecaptchaVerifier } from "firebase/auth";


const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }
  
  function setUpRecaptcha(number) {





    
    console.log("recaptchaVerifier:", window.recaptchaVerifier);
    console.log("number:", number);
    window.recaptchaVerifier = new RecaptchaVerifier( auth,"recaptcha-container", {
      size: "normal", // Adjust options as needed
      // callback: (response) => {
      //   // Callback function when reCAPTCHA is solved (optional)
      //   console.log("Recaptcha solved:", response);
      // },
    });
  
    // window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
  
    const appVerifier = window.recaptchaVerifier;
  
    appVerifier.render();
    return signInWithPhoneNumber(auth, number, appVerifier);
  }
  

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
  //     console.log("Auth", currentuser);
  //     setUser(currentuser);
  //   });

  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Auth", currentUser);
      setUser(currentUser);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  

  return (
    <userAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
        setUpRecaptcha,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}