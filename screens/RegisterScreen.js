import React, {useLayoutEffect, useState} from 'react';
import { StyleSheet, View,  KeyboardAvoidingView} from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import {auth} from '../firebase';

export default function RegisterScreen({ navigation }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
        headerBackTitle: "Back to Login",
    });
  }, [navigation]);

  const register = () => {
    auth.createUserWithEmailAndPassword(email, password)
    .then(authUser => {
        authUser.user.updateProfile({
            displayName: name,
            photoURL: imageUrl || "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        });
    })
    .catch(error => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      
      <Text h4 style={styles.text}>Create Fancy Signal Messenger</Text>

      <View style={ styles.inputContainer}>
        <Input
            placeholder="Name / Nickname"
            autofocus
            type="text"
            value={name}
            onChangeText={(text) => setName(text)}
            style={styles.textInput}
        />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.textInput}
        />
          <Input
            placeholder="Password"
            type="password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.textInput}
        />
          <Input
            placeholder="Profile Picture URL (optional)"
            type="image"
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
            onSubmitEditing={register}
            style={styles.textInput}
        />
      </View>

      <Button
          title="Register"
          onPress={register}
          type="outline"
          style={styles.registerButton}
        />
      <View style={{height: 100}}/>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: "white",
    },
    textInput: {
      padding: 15
    },
    inputContainer: {
      width: 300,
    },
    button: {
      width: 200,
      marginTop: 15,
      padding: 10
    },
    text: {
      marginBottom: 50,
      color: "#89C7E7",
      fontWeight: "700"
    },
    registerButton: {
      width: 200,
      marginTop: 10,
      color:"#05d6ed",
      border:"1px solid #05d6ed"
    },
})