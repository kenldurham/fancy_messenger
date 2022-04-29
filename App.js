import React from "react";
import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";


const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#FFF684"},
  headerTitleStyle: {color: "#89C7E7"},
  headerTintColor: "black",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // initialRouteName="Home"
      screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        {/* options={{title: "Lets Sign Up",}} inside the Stack.Screen */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b2b2b2",
    alignItems: "center",
    justifyContent: "center",
  },
});
