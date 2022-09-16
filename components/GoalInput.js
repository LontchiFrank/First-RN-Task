import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  Button,
} from "react-native";

const GoalInput = ({ onCancel, onAddGoal, visible }) => {
  const [enteredText, setEnteredText] = useState("");

  const goalInputHandler = (enteredGoal) => {
    setEnteredText(enteredGoal);
  };
  const addGoalHandler = () => {
    onAddGoal(enteredText);
    setEnteredText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Text here"
          style={{
            width: "80%",
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            marginBottom: 10,
          }}
          onChangeText={goalInputHandler}
          value={enteredText}
        />

        <Pressable style={styles.button} onPress={addGoalHandler}>
          <Text style={styles.text}>save</Text>
        </Pressable>
        <Button title="Cancel" color="red" onPress={onCancel} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 2,
    display: "flex",
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
