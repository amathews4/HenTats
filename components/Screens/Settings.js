import { Text, View, TouchableOpacity } from "react-native";
import fire from "../Firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//handles logout
const handleLogout = () => {
  fire.auth().signOut();
};

export default function Settings() {
  return (
   
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "grey",
      }}

    >
      <TouchableOpacity onPress={handleLogout}>
        <MaterialCommunityIcons name="logout" size={24} color="black" />
      </TouchableOpacity>
      <Text>Log Out</Text>
    </View>
  );
}
