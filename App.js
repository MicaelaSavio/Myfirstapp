import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [textValue, setTextValue] = useState('')
  const [itemsList, setItemsList] = useState([])

  const onHandleChangeItem = text => setTextValue(text)
  
  const addItem = () => {
    setItemsList(prevState => [
      ...prevState,
      { id: Math.random(), value: textValue},
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item de la lista"
          placeholderTextColor={"#ff0000"}
          style={styles.input}
          value={textValue}
          onChangeText={onHandleChangeItem}
        />
        <Button title='ADD' color={'#ff0000'} onPress={addItem} />
      </View>
      <View style={styles.listContainer}>
        {itemsList.map(item => {
          <View style={styles.TextContainer}>
            <Text style={styles.Text}>{item.value}</Text>
          </View>
        })}
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 200,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#ff0000",
    borderWidth: 2,
    marginTop: 40,
  },
  TextContainer: {
    borderColor: "#ff0000",
    alignItems: 'center',
    borderWidth: 2,
    marginVertical: 20,
    width: "90%",
  },
  Text: {
    fontSize: 24,
    color: "#ff0000",
    fontWeight: 'bold',
  }
})