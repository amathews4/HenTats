import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import fire from "../Firebase";

const handleLogout = () => {
    fire.auth().signOut();
}

export default function Settings() {
    
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" , backgroundColor: "grey"}}>
    
            <TouchableOpacity onPress = {handleLogout}>
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
    )
}