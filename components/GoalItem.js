import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GoalItem = ({ title, onDelete }) => {
  return (
    <TouchableNativeFeedback activeOpacity={0.8} onPress={onDelete}>
      <View style={styles.listItem}>
        <Text style={styles.text1}>{title}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    width: 200,
    height: 50,
    borderRadius: 5,
    backgroundColor: "#f2a9ec",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});

export default GoalItem;
