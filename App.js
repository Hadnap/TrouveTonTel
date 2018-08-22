import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Platform, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';

import Answers from './imports/answers';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };

    this.findMyPhone = this.findMyPhone.bind(this);
  }

  findMyPhone() {
    const answers = Answers;
    const idx = Math.floor(Math.random() * answers.length);
    this.setState({
      message: answers[idx]
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title} >TrouveTonTel</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.location}>
            <Text style={styles.locationText}>{this.state.message}</Text>
          </View>
          <Button
            large
            title="LOCALISER"
            iconRight={{ name: 'explore' }}
            backgroundColor='#607D8B'
            color='white'
            borderRadius={5}
            buttonStyle={styles.button}
            onPress={this.findMyPhone}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
  header: {
    flex: 1,
    backgroundColor: '#00796B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  body: {
    flex: 9,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    flex: 5,
    width:350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    fontSize: 30,
    color: '#009688',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: 350,
    marginBottom: 30
  }
});
