import React, { useState, useEffect } from "react";
import SignIn from "./components/Screens/SignIn";
import SignUp from "./components/Screens/SignUp";
import fire from "./components/Firebase";
import Navigation from "./components/Screens/Navigation";

export default function App() {
  const [signUp, setSignUp] = useState(false);
  const [user, setUser] = useState("");

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        //clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  function hasAccountHandler() {
    setSignUp(!signUp);
  }

  if (user) {
    return (
      <Navigation />
    );
  } else if (signUp) {
    return <SignUp hasAccountHandler = {hasAccountHandler}/>;
  } else {
    return (
      <SignIn
        hasAccountHandler={hasAccountHandler}
        signUp={signUp}
        setSignUp={setSignUp}
      />
    );
  }
}
