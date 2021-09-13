import React from "react";
import { View, StyleSheet, Button, TextInput,Modal } from "react-native";
const GoalInput = (props) => {
  const { goalInputHandler, addGoalHandler, enteredGoal,visible ,onCancel} = props;
  return (
      <Modal visible={visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <View style={styles.btnContainer}>
      <View style={styles.btn}><Button  onPress={onCancel} title="CANCEL"  color="red"/></View>
      <View style={styles.btn}><Button onPress={addGoalHandler} title="ADD" /></View>
      </View>
    </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex:1
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom:10
  },
  btnContainer:{
      flexDirection:"row",
        justifyContent:"space-around",
        width:"60%"
  },
  btn:{
      width:"40%"
  }
});
export default GoalInput;
