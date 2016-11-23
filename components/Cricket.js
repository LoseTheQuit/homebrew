/* eslint no-console: 0 */
'use strict';

import React, { Component, PropTypes } from 'react';

import { ListView, StatusBar, StyleSheet, TextInput, View, Text, Image, TouchableHighlight} from 'react-native';

import TimerMixin from 'react-timer-mixin';
import clrs from '../utils/clrs';
import { fetcher } from '../utils/fetcher';
import VideoRecorder from 'react-native-video-recorder';
var Button = require('react-native-button');

export default class Cricket extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  // onForward: PropTypes.func.isRequired,
  // onBack: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {

      _buttonPress: () => {
        this.props.navigator.push({
          // id: 'Main'
          id: 'CoreCamera'
        })
      },
      channelChanger: () => {
        console.log("testRun: 1 second has passed")
        setTimeout(() => {
          this.props.navigator.push({
             //id: 'CoreCamera'
             id: 'Main'
          })
        }, 1000)
      },
      componentDidMount: function() {
        console.log('THIS IS ON')
      }
    }
  }

  render() {

    return (
      <View style={styles.container}>

        <Text style={styles.largeText}>homebrew:
        </Text>
        <Text style={styles.largeText}>alpha v0.0.016</Text>
        <Text style={styles.infoText}></Text>

        <TouchableHighlight style={styles.button} onPress={this.state._buttonPress} ref={this.state.channelChanger}>
            <Text style={styles.buttonText}>Enter</Text>
        </TouchableHighlight>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#00a3e0"
  },
  largeText: {

    flex: 0,
    fontSize: 24,
    fontFamily: "Helvetica",
    // justifyContent: 'center',
    // alignItems: 'center',
    color: '#c7c7c7'
  },
  infoText: {
    flex: 2
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: "#006b94"
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    fontFamily: "Georgia",
    color: '#ddd',
  // backgroundColor: "#ff4334"
  }
});
