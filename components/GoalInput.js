import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [enteredText, setEnteredText] = useState("");

  const goalInputHandler = (enteredGoal) => {
    setEnteredText(enteredGoal);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Text here"
        style={{ width: "80%", borderColor: "black", borderWidth: 1 }}
        onChangeText={goalInputHandler}
        value={enteredText}
      />
      <Pressable style={styles.button} onPress={() => onAddGoal(enteredText)}>
        <Text style={styles.text}>save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: 50,
    height: 30,
    backgroundColor: "#450a40",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default GoalInput;
