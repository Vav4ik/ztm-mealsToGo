import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const RestaurantList = () => {
  return (
    <>
      <SafeAreaView style={styles.androidPaddingTop}>
        <View style={styles.searchContainer}>
          <Text>Search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  androidPaddingTop: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  searchContainer: {
    backgroundColor: "green",
    padding: 16,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "blue",
    padding: 16,
  },
});

export default RestaurantList;
