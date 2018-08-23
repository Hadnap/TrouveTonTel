import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, Platform, StatusBar } from 'react-native';
import { Button } from 'react-native-elements';

import Utils from './imports/Utils'
import Answers from './imports/answers';

export default class App extends Component {
  constructor() {
    super();
    this.answers = Answers;
    Utils.shuffleArray(this.answers);
    this.size = this.answers.length;
    this.state = {
      idx: -1,
      message: ''
    };

    this.findMyPhone = this.findMyPhone.bind(this);
  }

  findMyPhone() {
    this.setState((prevState) => {
      let idx = prevState.idx;
      if (idx === this.size - 1) {
        idx = -1;
        Utils.shuffleArray(this.answers);
      }
      return {
        message: this.answers[idx + 1],
        idx: idx + 1,
      }
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
    paddingTop: 50,
    flex: 5,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    fontSize: 30,
    width: 350,
    flex: 1,
    color: '#009688',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: 350,
    marginBottom: 30
  }
});
