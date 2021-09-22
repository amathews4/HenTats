import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import fire from "../Firebase";
//import { AntDesign } from '@expo/vector-icons';
//import { SimpleLineIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const handleLogout = () => {
    fire.auth().signOut();
}

export default function Settings() {
    
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: "grey"}}>
  
            <TouchableOpacity onPress = {handleLogout}>
            {/* <Text>Log Out</Text>
            <AntDesign name="logout" size={24} color="cyan" />
                */}
            <MaterialCommunityIcons name="logout" size={24} color="black" />
            </TouchableOpacity>
            <Text>Log Out</Text>
        </View>
    )
}