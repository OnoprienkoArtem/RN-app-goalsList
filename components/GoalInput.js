import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const GoalInput = props => {
    return (
        <View style={styles.listInput}>
            <Text>{props.title}</Text>
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({    
    listInput: {
        
    }
  });