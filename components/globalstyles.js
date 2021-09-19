import {StyleSheet,Dimensions} from "react-native";

const { width } = Dimensions.get('screen');

//universal stylesheet for application, may be imported to provide default style to certain objects
export default StyleSheet.create({

   container:{
       backgroundColor: '#000000',
   }
});


