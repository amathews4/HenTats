import React, { useState, useEffect } from "react";
import SignIn from "./components/Screens/SignIn";
import SignUp from "./components/Screens/SignUp";
import fire from "./components/Firebase";
import Navigation from "./components/Screens/Navigation";
import ForgetPassword from "./components/Screens/forgetPassword";
import CameraScreen from "./components/Screens/CameraScreen";


export default function App() {
  const [signUp, setSignUp] = useState(false);
  const [user, setUser] = useState("");
  const [forgetPassword, setForgetPassword] = useState(false);
  const [image, setImage] = useState();

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
  function forgetPasswordHandler() {
    setForgetPassword(!forgetPassword);
  }

  if(user && image) {
    return <CameraScreen image = {image}/>
  }
  else if (user) {
     return <Navigation setImage = {setImage}/>;
   } 
  else if (signUp) {
    return <SignUp hasAccountHandler={hasAccountHandler} />;
  } else if (forgetPassword) {
    return <ForgetPassword />;
  } else {
    return (
      <SignIn
        hasAccountHandler={hasAccountHandler}
        forgetPasswordHandler={forgetPasswordHandler}
      />
    );
  }
}
