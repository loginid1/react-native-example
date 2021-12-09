# react-native-example

## Requirements

- Nodejs
- npm

## env

A .env file is needed in the directory with the following:

```
BASE_URL=                  #This is the base url value found on the dashboard.
CLIENT_ID=                 #This is a Web client ID.
```

**NOTE** The client needs to be a public client (A client without a credential attached).

Here is an example of how a `.env` should look like:

```
BASE_URL=https://sandbox-usw1.api.loginid.io
CLIENT_ID=am_pUlDE1dnKq11qzIkD_KIzqyoK8t-g1dZnUdwzbGehg7p2Q3R8eLa4rNr_x7mlfMadN5GFKkSef4K2UKsoSQ
```

## How to Run

```
$ git clone https://github.com/loginid1/react-native-example.git
$ cd react-native-example
$ npm install
```

Depending on your device that you are using, you may need to do some additional set up. Have a look at the documentation found [here](https://docs.loginid.io/Client-SDKs/React-Native/react-native-get-started).

Have a look at the offical React Native documentation to see how to run on your chosen [device](https://reactnative.dev/docs/running-on-device).
