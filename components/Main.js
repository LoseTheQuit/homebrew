'use strict';

import React, { Component, PropTypes } from 'react';

import { ListView, StatusBar, StyleSheet, TextInput, View, ScrollView, Navigator, Text, Image, TouchableOpacity, TouchableHighlight,
} from 'react-native';

var Button = require('react-native-button');
var Slider = require('react-native-slider');
var loDash = require('lodash');
import clrs from '../utils/clrs'
import GPS from './GPS';
import LatitudeSlider from './LatitudeSlider';
import Rugby from './Rugby';
import NavStuff from './NavStuff';
import VideoRecorder from 'react-native-video-recorder';
import VideoPlayer from './VideoPlayer';
import Video from 'react-native-video';
import CoreCamera from './CoreCamera';

export default class Main extends Component {
  static propTypes = {
    // title: PropTypes.string.isRequired,
    // onForward: PropTypes.func.isRequired,
    // onBack: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {

      text: '',
      longitudeTransfer: 0,
      latitudeTransfer: 0,
      _handleBackButton: (event) => {
        console.log(Object.keys(event));
        // alert("Back button pressed")

        this.refs.recorder.record();

        // this.props.navigator.push({
        //   id: 'Cricket'
        // })

      },
      _handleVideo: (event) => {
        console.log(Object.keys(event));
        // alert("Back button pressed")
        this.props.navigator.push({
          id: 'VideoPlayer'
        })
      }
    }
  }

  render() {

    let pic = {
      uri: 'https://hsto.org/files/230/81c/56d/23081c56d81744a686c0916ba25a2e2b.png'
    }

    return (

      <ScrollView style={styles.container}>
      <View style={styles.mainNavContainer}>
      <Button
      style={ styles.backButton }
      onPress={this.state._handleBackButton}>
        Back
     </Button>

     <Button
      style={ styles.backButton }
      onPress={this.state._handleVideo}>
       Video
    </Button>

    </View>
        { /* <TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text }) }
          />

        <Text style={styles.textInput}>
          {this.state.text}
        </Text> */ }

        { /*<Image source={pic} style={{ width: 193, height: 110 }}/>*/ }

        { /* <StatusBar barStyle="light-content" backgroundColor="#444" showHideTransition='fade'></StatusBar> */ }

        <Slider

      onValueChange={value => this.setState({
        latitudeTransfer: value
      }) }
      minimumTrackTintColor={'#2ea8ff'}
      maximumrackTintColor={'#005694'}
      thumbTintColor={'#0083e0'} step={.1}
      minimumValue={-180} maximumValue={180}

      />

        <Text style={styles.coordinates}>
          Latitude: {this.state.latitudeTransfer}
        </Text>

        <Slider

      onValueChange={(value) => this.setState({
        longitudeTransfer: value
      }) }
      minimumTrackTintColor={'#2ea8ff'}
      maximumrackTintColor={'#005694'}
      thumbTintColor={'#0083e0'} step={.1}
      minimumValue={-180} maximumValue={180}

      />

        <Text style={styles.coordinates}>
          Longitude: {this.state.longitudeTransfer}
        </Text>

        <GPS long={this.state.longitudeTransfer}  lat={this.state.latitudeTransfer}/>

        { /* <Text style={styles.coordinates}>
          This is it!: {this.state.longitudeTransfer}
        </Text> */ }

        { /*<ListView dataSource={artists} style={{
           flex: 100,
          alignSelf: 'stretch'
        }} renderRow={this.renderRow}/>*/ }

        { /* <VideoPlayer></VideoPlayer> */ }

        { /* <VideoRecorder
      ref="recorder"
      onRecordingStarted={() => console.log('Started')}
      onRecordingFinished={(e) => console.log(e.nativeEvent.file)}
      onCameraAccessException={() => alert('No permission for camera')}
      onCameraFailed={() => alert('Camera failed')}
      type="back"
      videoEncodingBitrate={7000000}
      videoEncodingFrameRate={30}
      /> */ }

      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  // backgroundColor: '#effffe',
  },
  mainNavContainer: {
    flex: 2,
    flexDirection: "row",
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: "nowrap",
    justifyContent: 'space-between',
    // alignContent: 'flex-start',


  },
  textColorWhite: {
    color: '#ffffff',
  },
  centerThis: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  coordinates: {
    flex: 1,
    width: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#444',
    padding: 1,
    fontSize: 27
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  searchBox: {
    borderColor: clrs.black,
    height: 40,
    borderWidth: 3
  },
  title: {
    fontWeight: '500',
    fontSize: 25
  },
  homebrew: {
    fontWeight: '100',
    fontSize: 45
  },
  version: {
    fontWeight: '100',
    marginBottom: 50
  },
  backgroundVideoOFF: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 0,
    opacity: 0
  },

  backgroundVideoON: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  backButton: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'red',

  },

});
