import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import React from 'react';
import Counter from "react-native-counters";

export default function App() {

  const [activity, setActivity] = React.useState('');

  const [participants, setParticipants] = React.useState(1);

  const onPressButton = () => {
    axios.get(`https://www.boredapi.com/api/activity?participants=${participants}`)
    .then(response => {
      console.log('resposta: ', response);
      setActivity(response.data.activity)
    })
    .catch(e => {
      console.log('error: ', e)
    })
    .finally(()=>{
      console.log('finally')
    })
  }

  return (
    <View style={styles.container}>
      <Text>{activity}</Text>
      <Counter start={1} max={5} onChange={(number)=>{setParticipants(number)}} />
      <Button title='Nova Atividade' onPress={onPressButton}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
