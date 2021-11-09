import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import fire from "../Firebase";
import styles from "../globalstyles";
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalstyles from "../globalstyles";
import { AntDesign } from '@expo/vector-icons';


export default function ForgetPassword(props) {
  const [email, setEmail] = useState("");
  const {forgetPasswordHandler} = props;
  function passwordReset() {
    return fire.auth().sendPasswordResetEmail(email);
  }
  return (
    <View style={globalstyles.fpContainer}>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontWeight: "bold",color: "#00f3c5" }}>Enter your email here</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Email Address..."
          placeholderTextColor="#003f5c"
          onChangeText={setEmail}
        />
      </View>

      <View >
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText} onPress={passwordReset}>
            Submit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
                style={styles.loginBtn}
                onPress={forgetPasswordHandler}
              >
                <AntDesign name="back" size={24} color="cyan" />
              </TouchableOpacity>
       
        
      </View>
    </View>
  );
}
