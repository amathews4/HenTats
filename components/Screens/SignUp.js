import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
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
import styles from "../globalstyles";
import fire from "../Firebase";

export default function SignUp(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSignup = () => {
    if (password === reEnterPassword) {
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((err) => {
          switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
          }
        });
      fire
        .database()
        .ref("users/")
        .set({
          email: email.replace(".", ","),
          fullName: fullName,
        });
    } else setPasswordError("Your passwords don't match. Please try again!");
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <ImageBackground
            source={require("../Images/henna.jpg")}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={styles.title}>
              <TouchableOpacity>
                <Text>Return to Log In</Text>
              </TouchableOpacity>
              <Text style={styles.welcome}>Sign Up</Text>
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
                  placeholder="Name"
                  placeholderTextColor="#00f3c5"
                  onChangeText={setFullName}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.inputText}
                  placeholder="Email"
                  placeholderTextColor="#00f3c5"
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  secureTextEntry
                  style={styles.inputText}
                  placeholder="Password"
                  placeholderTextColor="#00f3c5"
                  onChangeText={setPassword}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  secureTextEntry
                  style={styles.inputText}
                  placeholder="Re Enter Password"
                  placeholderTextColor="#00f3c5"
                  onChangeText={setReEnterPassword}
                />
              </View>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={handleSignup}
              >
                <Text style={styles.loginText}>Get Started</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={props.hasAccountHandler}
              >
                <Text style={styles.loginText}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
