import React, { useState, useEffect, useLayoutEffect } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Text, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "../firebase";
import { color } from "react-native-reanimated";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Welcome Code the Dream!!",
    });
  }, [navigation]);
 
 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      //console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text h3 style={styles.text}></Text>
      <StatusBar style="light" />
      <Image
        source={{
          uri: "https://i.imgur.com/O4UARz8.png",
        }}
        style={styles.image}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.textInput}
        />

        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
          style={styles.textInput}
        />
      </View>

      <Button
        title="Login"
        containerStyle={styles.loginButton}
        onPress={signIn}
        type="outline"
      />
      <Button
        title="Register"
        containerStyle={styles.registerButton}
        type="outline"
        onPress={() => navigation.navigate("Register")}
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  textInput: {
    padding: 15,
  },
  registerButton: {
    width: 200,
    marginTop: 10,
    color: "#05d6ed",
    border: "1px solid #05d6ed",
  },

  loginButton: {
    width: 200,
    marginTop: 10,
    color: "#05d6ed",
    border: "1px solid #05d6ed",
    backgroundColor: "#05d6ed",
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    padding: 10,
    margin: 10,
    color: "#05d6ed",
    fontWeight: "700",
  },
});
