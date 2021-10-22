import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Settings from "./Settings";
import HomeScreen from "./HomeScreen";
import Galleries from "./Galleries";


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Gallery") {
                iconName = focused ? "camera" : "camera-outline";
              }
              else if(route.name === "Settings"){
                iconName = focused ? "list-sharp" : "list-outline";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })} 
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name = "Gallery" component = {Galleries}/>
          {/*<Tab.Screen name = "Saved Pictures" component ={SignIn}/>*/}
           <Tab.Screen name = "Settings" component = {Settings}/>
           
        </Tab.Navigator> 
      </NavigationContainer>
    )
}