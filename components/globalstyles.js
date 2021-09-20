import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

//universal stylesheet for application, may be imported to provide default style to certain objects
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center',
    width:'100%'
  },
  inner: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  welcome: {
    color: "#00f3c5",
    fontSize: 30,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 50,
    height: 100,
  },
  logoPic: {
    width: 200,
    resizeMode: "contain",
  },
  signIn: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 60,
  },

  inputText: {
    //height: 50,
    //color: 'white',
  },
  inputView: {
    width: "80%",
    backgroundColor: "grey",
    padding: 15,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
  },
  buttons: {
    flex: 2,
  },
  loginBtn: {
    backgroundColor: "black",
    color: "#00f3c5",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 40,
  },
  loginText: {
    color: "#00f3c5",
  },
  signUpButton:{
    flex:1,
    backgroundColor: "black",
    color: "#00f3c5",
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    marginVertical:40,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 40,
  },
  goButton:{
    flex:1,
    backgroundColor: "black",
    color: "#00f3c5",
    width: 200,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginVertical:80,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 40,
  }
});
