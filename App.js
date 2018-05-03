import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/common/Header';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

  componentWillMount() {
     firebase.initializeApp({
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    });
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <Header/>
        <LoginForm/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
