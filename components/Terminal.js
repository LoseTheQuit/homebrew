'use strict';

import React, { Component, PropTypes } from 'react';

import {StatusBar, StyleSheet, TextInput, View, ScrollView, Navigator, Text, Image, TouchableOpacity, TouchableHighlight, Dimensions} from 'react-native';

import GPS from './GPS';
import CardList from './CardList';
import clrs from '../utils/clrs';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class MyScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
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
              <GPS max={10000}/>

              {/* this is the one to use */}
              <CardList></CardList>
              {/* this is the one to use */}
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
