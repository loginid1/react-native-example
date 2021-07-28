import React, {useState, useEffect} from 'react';
import {BASE_URL, CLIENT_ID} from '@env';
import RNLoginApi from '@loginid/react-native-sdk';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Home from './views/';
import Dashboard from './views/dashboard';

const App = () => {
  const [username, setUsername] = useState('');
  const usernameHandler = text => setUsername(text);
  useEffect(() => {
    RNLoginApi.configure(CLIENT_ID, BASE_URL);
  }, []);

  return (
    <NativeRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <Home
                loginid={RNLoginApi}
                username={username}
                usernameHandler={usernameHandler}
              />
            );
          }}
        />
        <Route
          exact
          path="/dashboard"
          render={() => {
            return <Dashboard loginid={RNLoginApi} username={username} />;
          }}
        />
      </Switch>
    </NativeRouter>
  );
};

export default App;
