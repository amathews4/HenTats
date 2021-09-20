import * as React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../globalstyles";

export default function SignIn() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
          <ImageBackground source={require('../Images/henna.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.title}>
              <Text style={styles.welcome}>Welcome to HenTat!</Text>
            </View>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logoPic}
                source={require("../Images/logo.png")}
              />
            </View>
            <View style={styles.signIn}>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  placeholderTextColor="#00f3c5"
                  //onChangeText={setEmail}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  secureTextEntry
                  style={styles.inputText}
                  placeholder="Password"
                  placeholderTextColor="#00f3c5"
                  //onChangeText={setPassword}
                />
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.loginBtn} /*onPress={handleLogin}*/
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} /*onPress={hasAccountHandler}*/>
                  Sign Up
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.loginBtn}>
                <Text
                  style={styles.loginText} /*onPress={forgotPasswordHandler} */
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            </ImageBackground>
          </View>
        </TouchableWithoutFeedback>
      
    </KeyboardAvoidingView>
  );
}
