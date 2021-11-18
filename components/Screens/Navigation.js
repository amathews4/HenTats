import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Galleries from "./Galleries";
import UserProfileView from "./UserProfile";
import {View, StatusBar} from "react-native";


const Tab = createBottomTabNavigator();

export default function Navigation(props) {

  const {imageHandler} = props;

    return (
      <View style = {{width: '100%',height: '100%'}}>
        <StatusBar
        backgroundColor="#00f3c5"/>
        <NavigationContainer /*Holds in all the pages*/>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } 
              else if (route.name === "Gallery") {
                iconName = focused ? "images" : "images-outline";
              }
              else if(route.name === "Camera Screen"){
                iconName = focused ? "camera" : "camera-outline";
              }
              else if(route.name === "User Profile"){
                iconName = focused ? "person" : "person-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })} 
        >
          <Tab.Screen name = "Gallery" children = {()=> <Galleries imageHandler = {imageHandler} />} />
          <Tab.Screen name = "User Profile" component = {UserProfileView}/>   
        </Tab.Navigator> 
      </NavigationContainer>
      </View>
    )
}