import { StatusBar } from 'expo-status-bar';
import React, { useState , useEffect } from 'react';
import { Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Todo from './Todo';
const App = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [total, setTotal] = useState(0);
  const [gigs, setGigs] = useState([{
    description: 'buy now',
    amount : '999',
  }]);
  useEffect(() => {
    setTotal(gigs.reduce((total ,gig) => total + Number(gig.amount) , 0));
  }, [gigs]);

  const addgigs = () => {
    setGigs([...gigs, {
      description: description,
      amount: amount
    }]);
    setDescription('');
    setAmount('');
  };
  return (
    <SafeAreaView >
      <View>
        <Text style={styles.h1text}>my first app to test </Text>
      </View>
      <Text>Total in come : $ {total} </Text>
      <TextInput style={styles.todoinput}
        value={description}
        keyboardType='default'
        placeholder='enter Description'
        onChangeText={text => setDescription(text)} />
      <TextInput style={styles.todoinput}
        value={amount}
        placeholder='Amount in USD ($)'
        keyboardType='numeric'
        onChangeText={text => setAmount(text)} />
      <TouchableOpacity>
      <Button disabled={!description && !amount} title='Click me' onPress={addgigs} />
      </TouchableOpacity>
      {gigs.map(gig => (
        <View>
          <Text>{ gig.description }</Text>
          <Text>{gig.amount}</Text>
          <Text style={{ fontSize:'small', color: '#bdb76b' , fontWeight: 300 }}>{ new Date().toString() }</Text>
        </View>
      ))}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  view: {
    
  },
  top : {
    width: 300,
    height: 200,
    backgroundColor: 'green'
  },
  h1text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  todob: {
    width: 50,
    height: 800,
  },
  todoinput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'yellow',
    margin: 20,

  },
  
});

export default App;
