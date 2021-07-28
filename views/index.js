/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Home = () => {
  const [username, setUsername] = useState('');
  const [payload, setPayload] = useState('');

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="black"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Transaction Payload"
        placeholderTextColor="black"
        value={payload}
        onChangeText={text => setPayload(text)}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Confirm Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#036ef9',
    fontSize: 25,
    fontWeight: 'bold',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  input: {
    backgroundColor: '#ededed',
    borderRadius: 5,
    fontWeight: 'bold',
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#036ef9',
    borderRadius: 5,
    width: '80%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Home;
