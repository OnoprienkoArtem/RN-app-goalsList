import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {  
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    goalInputHandler('');
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: goalTitle }
    ]);
  };

  return (
    <View style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  }
});
