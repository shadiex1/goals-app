import React , {useState} from "react";
import { StyleSheet, View ,FlatList,Button} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [enteredGoal,setEnterdGoal] = useState("")
  const [courseGoals,setCourseGoals] = useState([])
  const [isAddMode,setIsAddMode] = useState(false)

  const goalInputHandler = enteredtext =>{
    setEnterdGoal(enteredtext)
  }
  const addGoalHandler=()=>{
  //  setCourseGoals([...courseGoals,enteredGoal])
  setCourseGoals(currentGoals=>[...currentGoals,{key:Math.random().toString(),value:enteredGoal}]);
  setEnterdGoal("");
  setIsAddMode(false);
  }
  const removeGoalHandlder = key=>{
    setCourseGoals(currentGoals=>{
      return currentGoals.filter(goal=>goal.key !== key)
    })
  }
  const cancelGoalAdditionHandler=()=>{
    setIsAddMode(false);

  }
  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={()=>setIsAddMode(true)}/>
          <GoalInput visible={isAddMode} enteredGoal={enteredGoal} goalInputHandler={goalInputHandler} addGoalHandler={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList data={courseGoals} renderItem={itemData=><GoalItem id={itemData.item.key} onDelete={()=>removeGoalHandlder(itemData.item.key)} title={itemData.item.value}/>}/>
        {/* {
          courseGoals.map(goal=><View key={goal} style={styles.listItem}><Text >{goal}</Text></View>)
        } */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  
 
});
