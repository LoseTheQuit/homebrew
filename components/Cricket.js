/* eslint no-console: 0 */
'use strict';

import React, { Component, PropTypes } from 'react';

import { ListView, StatusBar, StyleSheet, TextInput, View, Text, Image, TouchableHighlight } from 'react-native';

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

      text: '',
      longitudeTransfer: 0,
      latitudeTransfer: 0,

      _buttonPress: (event) => {
        this.props.navigator.push({
          id: 'Main'

        })
      },
    }
  }

  render() {
    let pic = {
      uri: 'http://quietmike.org/wp-content/uploads/2016/07/BlackLivesMatter-1.jpg'
    }
    return (
      <View style={styles.container}>
       <Image source={pic} style={styles.backgroundImage}>
        <View style={styles.cardOverlay1}></View>
        <View style={styles.cardOverlay2}></View>
        <View style={styles.cardOverlay3}></View>
        <View style={styles.cardOverlay4}>
         <Text style={styles.largeText}>homebrew</Text>
        </View>
        <View style={styles.cardOverlay5}></View>
        <View style={styles.cardOverlay6}>
         <Text style={styles.largeText}>Alpha v0.0.012</Text>
        </View>
         <TouchableHighlight style={styles.cardOverlay7} onPress={this.state._buttonPress}>
          <Text style={styles.buttonText}>Enter</Text>
         </TouchableHighlight>
       </Image>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00a3e0"
  },
  backgroundImage: {
    flex: 28,
    // resizeMode: 'stretch', // or 'stretch'
    resizeMode: 'cover', // or 'stretch'
    width: 500,
    height: null,
  },
  largeText: {
    flex: 1,
    fontSize: 50,
    fontFamily: "Georgia",
    justifyContent: 'center',
    alignItems: 'center',
    color: '#c7c7c7',
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
  },
  cardOverlay1: {
    flex: 1,
    backgroundColor: "rgba(0, 107, 148, .75)",
    // alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardOverlay2: {
    flex: 2,
    backgroundColor: "rgba(0, 126, 173, .75)",
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOverlay3: {
    flex: 3,
    backgroundColor: "rgba(0, 144, 199, .75)",
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOverlay4: {
    flex: 4,
    backgroundColor: "rgba(0, 163, 224, .75)",
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOverlay5: {
    flex: 5,
    backgroundColor: "rgba(0, 182, 250, .75)",
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOverlay6: {
    flex: 6,
    backgroundColor: "rgba(20, 191, 255, .75)",
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardOverlay7: {
    flex: 7,
    backgroundColor: "rgba(46, 198, 255, .75)",
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
