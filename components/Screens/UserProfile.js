import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,Linking } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import fire from "../Firebase";

const handleLogout = () => {
  fire.auth().signOut();
};

export default class UserProfileView extends Component {
  // constructor(props) {
  //   super(props);
  //   this.name = fire.firestore().collection('users').get().then(snapshot => {
  //     snapshot.forEach(doc => {
  //       const data = doc.data();
  //       if (data.email === fire.auth().currentUser.email.replace('.', ',')) {
  //         return doc;
  //       }
  //     })
  //   }).then((doc) => {
  //     console.log(doc.data);
  //     return doc.data}).then((data) => {return data.fullName});
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style = {styles.email}>User Email</Text> 
            <Text style={styles.userInfo}> {fire.auth().currentUser.email}</Text>
            <Text>{''}</Text>
            <Text style = {styles.email}>Please fill out this survey for us!</Text> 
            <Text style={styles.link}  onPress={() => Linking.openURL('https://forms.gle/8SN8d89rgKCGhJFG6')}> Click here for survey </Text>
          </View>
        </View>
        <View style={styles.logOut}>
          <TouchableOpacity onPress={handleLogout}>
            <MaterialCommunityIcons name="logout" size={24} color="black" />
          </TouchableOpacity>
          <Text>Log Out</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  headerContent: {
    padding: 20,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: "600",
  },
  link:{
    color:'blue',
  },
  email:{
    fontSize: 16,
    fontWeight:'bold',
  },
  userInfo: {
    fontSize: 16,
    color: "black",
    fontWeight: "600",
  },
  body: {
    backgroundColor: "white",
    height: 500,
    alignItems: "center",
  },

  logOut: {
    // width: '100%',
    // height: '50%',
    // justifyContent: 'center',
    // alignItems: 'center'
    
    position: 'relative',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

});
