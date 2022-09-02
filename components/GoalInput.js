import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const GoalInput = ({}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Text here"
        style={{ width: "80%", borderColor: "black", borderWidth: 1 }}
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Pressable style={styles.button} onPress={addGoalEntered}>
        <Text style={styles.text}>save</Text>
      </Pressable>
    </View>
  );
};

export default GoalInput;
