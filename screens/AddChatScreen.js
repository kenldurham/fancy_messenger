import React, { useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Icon } from 'react-native-elements';
import { db } from '../firebase';

const AddChatScreen = ({ navigation }) => {

    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "Chats",

        })
    }, [navigation]);

    const createChat = async () => {
        await db.collection("chats").add({
            chatName: input
        })
        .then(() => {
            navigation.goBack()
        })
        .catch((error) => alert(error));
    };

  return (
    <View style={styles.container}>
      <Input 
        placeholder="Chat name" 
        value={input}
        style={styles.textInput} 
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
            <Icon 
              name="wechat" 
              type="antdesign" 
              size={24} 
              color="black"
            />
        }
      />
      <Button 
        disabled={!input} 
        onPress={createChat} 
        title="Create new chat">
      </Button>
    </View>
  )
};

export default AddChatScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      padding: 30,
      height: "100%"
    },
    textInput: {
      padding: 15
    }
});