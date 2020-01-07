import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.listInput}>
            <TextInput
                placeholder="My Goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button title="ADD" onPress={props.onAddGoal.bind(this, enteredGoal)} />
        </View>
    )
}

const styles = StyleSheet.create({
    listInput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 20
    }
});

export default GoalInput;