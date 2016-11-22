'use strict';

import React, { Component, PropTypes } from 'react';

import {StatusBar, StyleSheet, TextInput, View, ScrollView, Navigator, Text, Image, TouchableOpacity, TouchableHighlight, Dimensions} from 'react-native';

var Slider = require('react-native-slider');
var loDash = require('lodash');
import clrs from '../utils/clrs'
import GPS from './GPS';
import LatitudeSlider from './LatitudeSlider';
import Rugby from './Rugby';
import NavStuff from './NavStuff';
import RestView from './RestView';
import CardList from './CardList';
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

    this.state = {
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

    let underarmour_1 = {
      uri: 'http://quietmike.org/wp-content/uploads/2016/07/BlackLivesMatter-1.jpg'
    }

    let underarmour_2 = {
      uri: 'http://wallpaperlayer.com/img/2015/1/blurred-city-lights-wallpaper-7607-7901-hd-wallpapers.jpg'
    }

    return (

      <View style={styles.container}>
                <Image source={underarmour_2} style={styles.backgroundImage}>
                    <View style={[styles.imageOverlay]}>

                        {/*
                        <View style={styles.mainNavContainer}>

                           <TouchableHighlight style={styles.backButton} onPress={this.state._handleBackButton}>
                           <Text style={styles.buttonText}>Back</Text>
                           </TouchableHighlight>

                            <TouchableHighlight style={styles.backButton} onPress={this.state._handleRecordVideo}>
                            <Text style={styles.buttonText}>Record</Text>
                            </TouchableHighlight>

                        </View>
                        */}

                        <View style={styles.contentContainer}>

                            { /*
                              <TextInput
                              style={styles.textInput}
                              placeholder="Type here to translate!"
                              onChangeText={(text) => this.setState({ text }) }
                              />

                            <Text style={styles.textInput}>
                              {this.state.text}
                            </Text>
                            */ }

                            { /*
                              <StatusBar barStyle="light-content" backgroundColor="#444" showHideTransition='fade'></StatusBar>
                            */ }

                             <GPS max={this.state.maxDistance}/>

                             {/* this is the one to use */}
                             <CardList></CardList>
                             {/* this is the one to use */}

                             {/* <RestView></RestView> */}

                             {/* <Slider onValueChange={(value) => this.setState({
                              maxDistance: value
                            })} minimumTrackTintColor={'#2ea8ff'} maximumrackTintColor={'#005694'} thumbTintColor={'#0083e0'} step={.1} minimumValue={0} maximumValue={10000}/> */}


                           <View style={styles.mainNavContainer}>
                                {/* <TouchableHighlight style={styles.backButton} onPress={this.state._handleWatchVideo}>
                                    Watch
                                </TouchableHighlight> */}
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
  basePadding: {
    padding: 10
  },
  contentContainer: {
    flex: 2,
    justifyContent: 'flex-start',
  // alignItems: 'flex-start',
  // flexDirection: 'column',
  // padding: 10
  // backgroundColor: '#effffe',
  },
  buttonText: {
  fontFamily: 'Roboto'
  },
  backgroundImage: {
    flex: 28,
    resizeMode: 'cover', // or 'stretch'
    width: width,
    height: height
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 107, 148, .75)",
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
    // color: '#fff',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
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
