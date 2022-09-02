import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Pressable,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredGoal) => {
    setEnteredText(enteredGoal);
  };

  const addGoalEntered = () => {
    // console.log(enteredText);
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredText },
    ]);
    console.log(courseGoals);
  };

  return (
    <View style={styles.screen}>
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
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={courseGoals}
        renderItem={(itemData) => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 70,
  },
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
    // color: "#fff",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  textContainer: {
    width: 200,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#f2a9ec",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
  },
});
