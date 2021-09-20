import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "./components/Screens/SignIn";
import SignUp from "./components/Screens/SignUp";
import fire from "./components/Firebase";
import firebase from "firebase";
import Settings from "./components/Screens/Settings";
require("firebase/auth");

function CameraScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Camera!</Text>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [signUp, setSignUp] = useState(false);
  const [user, setUser] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

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
  function forgotPasswordHandler() {
    setForgotPassword(!forgotPassword);
  }

  if (user) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Camera") {
                iconName = focused ? "camera" : "camera-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Camera" component={CameraScreen} />
          {/*<Tab.Screen name = "Saved Pictures" component ={SignIn}/>*/}
           <Tab.Screen name = "Settings" component = {Settings}/>
        </Tab.Navigator> 
      </NavigationContainer>
    );
  } else if (signUp) {
    return <SignUp loginHandler={loginHandler} hasAccountHandler = {hasAccountHandler}/>;
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
