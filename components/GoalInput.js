import React, {useState} from 'react';
import { Button, StyleSheet, View, TextInput, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }
    
    const onGoalHandler = () =>{
      props.onAddGoal(enteredGoal)
      setEnteredGoal('')
    }
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.input}>
          <TextInput placeholder="Course Goal"
           style={styles.inputContainer}
           onChangeText={goalInputHandler}
           value={enteredGoal}>
          </TextInput>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="CANCEL" color="red" onPress={props.onCAncel}></Button>
            </View>
            <View style={styles.button}>
              <Button title="ADD" onPress={onGoalHandler}></Button>
            </View> 
          </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({

    inputContainer: {
       borderBottomColor: 'black',
       borderBottomWidth: 1 ,
       width: '80%',
       marginBottom: 10
    },
    input: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '50%'
    },
    button : {
      width: '40%'
    }
});
  

export default GoalInput;