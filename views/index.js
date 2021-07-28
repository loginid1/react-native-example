import React, {useState} from 'react';
import {useHistory} from 'react-router-native';
import uuid from 'react-native-uuid';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Home = ({loginid, username, usernameHandler}) => {
  const history = useHistory();
  const [payload, setPayload] = useState('');

  const handleRegister = async () => {
    try {
      const response = await loginid.registerWithFido2(username);
      console.log(response);

      if (response.success) {
        history.push('/dashboard');
      } else {
        alert(response.errorMessage);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const handleAuthenticate = async () => {
    try {
      const response = await loginid.authenticateWithFido2(username);
      console.log(response);

      if (response.success) {
        history.push('/dashboard');
      } else {
        alert(response.errorMessage);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const handleConfirmTx = async () => {
    try {
      const transactionPayload = {
        data: payload,
        nonce: uuid.v4(),
      };
      const response = await loginid.transactionConfirmation(
        username,
        transactionPayload,
      );

      if (response.success) {
        alert(
          `Transaction with payload: ${payload} has been created and confirmed:\n\n ${response.jwt}`,
        );
      } else {
        alert(response.errorMessage);
      }
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="black"
        value={username}
        onChangeText={usernameHandler}
      />
      <TextInput
        style={styles.input}
        placeholder="Transaction Payload"
        placeholderTextColor="black"
        value={payload}
        onChangeText={text => setPayload(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAuthenticate}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleConfirmTx}>
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
