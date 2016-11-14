'use strict';

import React, { Component, PropTypes } from 'react';

import { ListView, StatusBar, StyleSheet, TextInput, View, ScrollView, Navigator, Text, Image, TouchableOpacity, TouchableHighlight, Dimensions} from 'react-native';

var Button = require('react-native-button');
var Slider = require('react-native-slider');
var loDash = require('lodash');
import clrs from '../utils/clrs'
import GPS from './GPS';
import LatitudeSlider from './LatitudeSlider';
import Rugby from './Rugby';
import NavStuff from './NavStuff';
import RestView from './RestView';
import RestList from './RestList';
import VideoRecorder from 'react-native-video-recorder';
import VideoPlayer from './VideoPlayer';
import Video from 'react-native-video';
import CoreCamera from './CoreCamera';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
export default class Main extends Component {
  static propTypes = {
    // title: PropTypes.string.isRequired,
    // onForward: PropTypes.func.isRequired,
    // onBack: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const data = [
      'Shark',
      'Apple',
      'Math',
      'Ice Cream',
      'Roof',
      'House',
      'Roof',
      'House',
      'Fish',
      'Chicken',
      'Burgers',
      'Music',
      'Waves',
      'Coffee'
    ];

    this.state = {
      artists: dataSource.cloneWithRows(data),
      text: '',
      maxDistance: '',
      _handleBackButton: (event) => {
        console.log(Object.keys(event));
        // alert("Back button pressed")
        this.props.navigator.push({
          id: 'Cricket'
        })
      },
      _handleRecordVideo: (event) => {
        console.log(Object.keys(event));
        // alert("Back button pressed")
        this.props.navigator.push({
          id: 'CoreCamera'
        })
      },
      _handleWatchVideo: (event) => {
        console.log(Object.keys(event));
        // alert("Back button pressed")
        this.props.navigator.push({
          id: 'VideoPlayer'
        })
      }
    }
  }

  render() {

    const {artists} = this.state;

    let pic = {
      uri: 'http://quietmike.org/wp-content/uploads/2016/07/BlackLivesMatter-1.jpg'
    }

    return (

      <View style={styles.container}>
                <Image source={pic} style={styles.backgroundImage}>
                    <View style={styles.imageOverlay}>
                        <View style={styles.mainNavContainer}>

                            <Button style={styles.backButton} onPress={this.state._handleBackButton}>
                                Back
                            </Button>

                            <Button style={styles.backButton} onPress={this.state._handleRecordVideo}>
                                Record
                            </Button>

                        </View>

                        <View style={styles.contentContainer}>

                            { /* <TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text }) }
          />

        <Text style={styles.textInput}>
          {this.state.text}
        </Text> */ }

                            { /* <StatusBar barStyle="light-content" backgroundColor="#444" showHideTransition='fade'></StatusBar> */ }

                            { /*<GPS max={this.state.maxDistance}/>*/ }

                            <Slider onValueChange={(value) => this.setState({
        maxDistance: value
      })} minimumTrackTintColor={'#2ea8ff'} maximumrackTintColor={'#005694'} thumbTintColor={'#0083e0'} step={.1} minimumValue={0} maximumValue={10000}/>

                            <RestList></RestList>

                            { /* <RestView></RestView> */ }

                            <View style={styles.mainNavContainer}>
                                <Button style={styles.backButton} onPress={this.state._handleWatchVideo}>
                                    Watch
                                </Button>
                            </View>

                        </View>
                    </View>
                </Image>
            </View>

    )
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#effffe'
  },
  contentContainer: {
    flex: 2,
    justifyContent: 'flex-start',
  // alignItems: 'flex-start',
  // flexDirection: 'column',
  // padding: 10
  // backgroundColor: '#effffe',
  },
  backgroundImage: {
    flex: 28,
    resizeMode: 'cover', // or 'stretch'
    width: width,
    height: height
  },
  imageOverlay: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0, 107, 148, .75)",
  // justifyContent: 'center',
  // alignItems: 'center',
  // alignSelf: 'stretch',
  },
  mainNavContainer: {
    flex: 2,
    flexDirection: "row",
    padding: 0,
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // flexWrap: "nowrap",
    justifyContent: 'space-between'
  },
  backButton: {
    flex: 1,
    color: '#fff',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 70,
    borderWidth: 10,
    borderColor: 'red',
    borderStyle: 'solid'
  // justifyContent: 'center',
  // alignItems: 'center',
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
    margin: 10
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
  fontColorWhite: {
    color: '#ffffff'
  }
});
;
