'use strict';

import React, { Component, PropTypes } from 'react';

import {StatusBar, StyleSheet, TextInput, View, ScrollView, Text, Image, TouchableOpacity, TouchableHighlight, Dimensions} from 'react-native';
// Navigator
var ToolbarAndroid = require('ToolbarAndroid');

import GPS from './GPS';
import CardList from './CardList';
import ToolBarMenu from './ToolBarMenu';
import clrs from '../utils/clrs';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var toolbarActions = [

   {title: 'Share', icon: {uri: 'https://cdn3.iconfinder.com/data/icons/glypho-free/64/share-256.png'}, show: 'always'},
   {title: 'Settings',
   icon: require('../assets/img/settings.png'),
   show: 'always'}
];

export default class Terminal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toolbarText: 'homebrew'
    }
  }
  onActionSelected = (position) => {
    if (position === 1) {
      // index of 'Settings'
      // showSettings();

      this.props.navigator.push({
        // id: 'Main'
        id: 'ToolBarMenu'
      })
    }
    this.setState({
      toolbarText: toolbarActions[position].title,
    });
  }
  render() {

    let underarmour_1 = {
      uri: 'http://quietmike.org/wp-content/uploads/2016/07/BlackLivesMatter-1.jpg'
    }

    let underArmour = {
      uri: 'http://wallpaperlayer.com/img/2015/1/blurred-city-lights-wallpaper-7607-7901-hd-wallpapers.jpg'
    }


    return (
      <View style={styles.container} >
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
              <GPS max={this.props.max}/>
              <Text  style={styles.version}>
              {this.state.max}
              {this.props.max}
               </Text>
              <ScrollView contentcontainerstyle={styles.ScrollViewStyle}>
              <CardList navigator={this.props.navigator}></CardList>
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
    marginBottom: 10,
    fontSize: 34
  },
  ScrollViewStyle: {
  //  padding: 10
  },
  toolbar: {
    height: 56,
    backgroundColor: '#e9eaed',
  }
});
