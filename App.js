import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./app/components/Screen";
import AuthNavigator from "./app/navigator/AuthNavigator";
import AppNavigator from "./app/navigator/AppNavigator";

export default function App() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "white",
        },
      }}
    >
      {/* <AuthNavigator />
       */}

      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
