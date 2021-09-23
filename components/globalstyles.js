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
    width:'100%',
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
    marginTop: 30,
  },
  signUpMsg: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  welcome: {
    color: "#00f3c5",
    fontSize: 30,
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 75,
    height: 100,
  },
  logoPic: {
    width: 180,
    resizeMode: "contain",
  },
  signIn: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginBottom: 70,
  },

  inputText: {
    height: 20,
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
    marginTop: 45
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
    backgroundColor: "black",
    color: "#00f3c5",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 30,
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 40,
  },
  upButtons:{
    flex: 3,
    marginTop: 100
  },
  forgot:{
    color:"white",
    fontSize:11
},
forgotBody:{
  alignItems:"center",
  marginTop:25
},
forgotScreen:{flex: 1,
  backgroundColor:"#ccffcf",
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%'

},
forgotScreen2:{width:"70%",
  backgroundColor:"#ffffff",
  borderRadius:25,
  height:50,
  marginBottom:5,
  justifyContent:"center",
  padding:20}
});