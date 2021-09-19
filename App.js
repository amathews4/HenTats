import * as React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./components/globalstyles";

function LoginScreen() {
  return (
    <View style={styles.container}>



      <View style = {styles.logoContainer}>
        <Image style ={styles.logoPic} source={require('./components/Images/logo.png')}/>
      </View>



      {/*<Text style={styles.logo}>HenTat</Text>*/}
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          //onChangeText={setEmail}
        />
      </View>
      <View style={styles.errMsgBody}>
        <Text style={styles.errMsg}>{/*emailError*/}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          //onChangeText={setPassword}
        />
      </View>
      <View style={styles.errMsgBody}>
        <Text style={styles.errMsg}>{/*passwordError*/}</Text>
      </View>
      <View style={styles.loginView}>
        <TouchableOpacity style={styles.loginBtn} /*onPress={handleLogin}*/>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Don't have an account?</Text>
      </View>
      <View style={styles.switchToLoginOrRegister}>
        <TouchableOpacity>
          <Text style={styles.signUpText} /*onPress={hasAccountHandler}*/>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.forgotBody}>
        <TouchableOpacity>
          <Text style={styles.forgot} /*onPress={forgotPasswordHandler} */>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
  var loggedIn = false;
  if (loggedIn) {
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
        </Tab.Navigator>
      </NavigationContainer>
    );
  }

  else {
    return (
      <LoginScreen/>
    );
  }
}
