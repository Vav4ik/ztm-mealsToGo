import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RestaurantList from "./src/components/RestaurantList";

export default function App() {
  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //   <Text>This is our blank canvas</Text>
    // </View>
    <RestaurantList />
  );
}

const styles = StyleSheet.create({});
