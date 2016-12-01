'use strict';

import React, { Component, PropTypes } from 'react';

import {StatusBar, StyleSheet, TextInput, View, ScrollView, Text, Image, TouchableOpacity, TouchableHighlight, Dimensions} from 'react-native';
// Navigator

import clrs from '../utils/clrs';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var ToolbarAndroid = require('ToolbarAndroid');
var Slider = require('react-native-slider');

var toolbarActions = [

   {title: 'Share', icon: {uri: 'https://cdn3.iconfinder.com/data/icons/glypho-free/64/share-256.png'}, show: 'always'},
   {title: 'Settings',
   icon: require('../assets/img/settings.png'),
   show: 'always'}
];

export default class toolBarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbarText: 'Menu',
      maxDistance: 0
    }
  }

  onActionSelected = (position) => {
    if (position === 1) {
      this.props.navigator.push({
         id: 'Terminal',
        //  max: this.state.maxDistance,
        max:  1000,
         passProps: {
          //  max: this.state.maxDistance
           max:  1000
         }
      })
    }
    this.setState({
      toolbarText: toolbarActions[position].title,
    });
  }

  render() {

    let underArmour = {
      uri: 'http://wallpaperlayer.com/img/2015/1/blurred-city-lights-wallpaper-7607-7901-hd-wallpapers.jpg'
    }

    return (
      <View style={styles.container}>
        <Image source={underArmour} style={styles.backgroundImage}>
          <View style={[styles.imageOverlay]}>
          <View style={styles.topContainer}>
            <ToolbarAndroid
            title= {this.state.toolbarText}
            style={styles.toolbar}
            actions={toolbarActions}
            onIconClicked={() => this.setState({toolbarText: 'Icon clicked'})}
            onActionSelected={this.onActionSelected} />
          </View>
          <Slider onValueChange={(value) => this.setState({
           maxDistance: value
         })} minimumTrackTintColor={'#2ea8ff'} maximumrackTintColor={'#005694'} thumbTintColor={'#0083e0'} step={.1} minimumValue={0} maximumValue={10000}/>
            <ScrollView contentcontainerstyle={styles.ScrollViewStyle}>
            <Text>
               {this.state.maxDistance}
            </Text>
            <Text>
               {this.state.test}
            </Text>
            <Text>
               {this.props.test}
            </Text>
            </ScrollView>

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
    button: {
    flex: 1,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    height: 40,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid'
  },
  centerThis: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  } ,
  version: {
    fontWeight: '100',
    marginBottom: 50
  },
  ScrollViewStyle: {
  //  padding: 10
  },
  toolbar: {
    height: 56,
    backgroundColor: '#e9eaed',
  },
  menuHeader: {
    fontSize: 50
  }
});
