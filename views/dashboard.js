import React from 'react';
import {useHistory} from 'react-router-native';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Dashboard = ({loginid, username}) => {
  const history = useHistory();
  const handleLogout = () => {
    loginid.logout();
    history.push('/');
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>{username} is logged in</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    color: '#036ef9',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
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

export default Dashboard;
