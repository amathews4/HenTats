import React, { useState, useEffect } from "react";
import SignIn from "./components/Screens/SignIn";
import SignUp from "./components/Screens/SignUp";
import fire from "./components/Firebase";
import Navigation from "./components/Screens/Navigation";
import ForgetPassword from "./components/Screens/forgetPassword";
import CameraScreen from "./components/Screens/CameraScreen";


export default function App() {
  
  const [signUp, setSignUp] = useState(false); //checks state of signup
  const [user, setUser] = useState(""); // sets a user 
  const [forgetPassword, setForgetPassword] = useState(false); //if you forget your password goto ForgetPassword.js
  const [image, setImage] = useState(); // selected image from gallery 

  //listens to authentication state
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

  useEffect(() => {
    console.log(image);
  }, [image]);

  //handler callback functions
  function hasAccountHandler() {
    setSignUp(!signUp);
  }
  function forgetPasswordHandler() {
    setForgetPassword(!forgetPassword);
  }

  function imageHandler(img) {
    setImage(img);
  }

  // checks if user and image are set to go to Camera
  if(user && image) {
    return <CameraScreen image = {image} imageHandler = {imageHandler}/> 
  }
  // if signedin go to main page, through Navigation.js to Galleries.js
  else if (user) {
     return <Navigation imageHandler = {imageHandler}/>;
   } 
  //if user wants to sign up
  else if (signUp) {
    return <SignUp hasAccountHandler={hasAccountHandler} />;
  } 
  //if user forgot password
  else if (forgetPassword) {
    return <ForgetPassword  forgetPasswordHandler={forgetPasswordHandler}/>;
  }
  // if normal sign in
   else {
    return (
      <SignIn
        hasAccountHandler={hasAccountHandler}
        forgetPasswordHandler={forgetPasswordHandler}
      />
    );
  }
}
