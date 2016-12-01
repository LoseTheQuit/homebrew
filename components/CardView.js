'use strict';

import React, { Component, PropTypes } from 'react';

import {StatusBar, StyleSheet, TextInput, View, ScrollView, Navigator, Text, Image, TouchableOpacity, TouchableHighlight, Dimensions} from 'react-native';

import GPS from './GPS';
import CardList from './CardList';
import CardView from './CardView';
import clrs from '../utils/clrs';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

var ToolbarAndroid = require('ToolbarAndroid');
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
      toolbarText: 'homebrew',
      _buttonPress: () => {
        this.props.navigator.push({
          id: 'Cricket'
        })
      }
    }
  }
  onActionSelected = (position) => {
    if (position === 1) {
      // index of 'Settings'
      // showSettings();

      this.props.navigator.push({
        // id: 'Main'
        id: 'Cricket'
      })
    }
    this.setState({
    //  toolbarText: 'Selected ' + toolbarActions[position].title,
     toolbarText: toolbarActions[position].title,
    });
  }

  _buttonPress = () =>  {
    console.log("PRESSED")
    //  this.props.navigator.push({
    //     id: 'Main'
    //   })
  }

  render() {

    let underarmour_1 = {
      uri: 'http://quietmike.org/wp-content/uploads/2016/07/BlackLivesMatter-1.jpg'
    }

    let underarmour_2 = {
      uri: 'http://wallpaperlayer.com/img/2015/1/blurred-city-lights-wallpaper-7607-7901-hd-wallpapers.jpg'
    }


    return (
      <View style={styles.container} >
      <TouchableHighlight style={styles.button}
    onPress={this._buttonPress.bind(this)}>
      {/* onPress={this._buttonPress()}> */}
        <Text style={styles.restData}>View Video</Text>
      </TouchableHighlight>
<Text>
hello</Text>
            <View style={styles.topContainer}>
              <ToolbarAndroid
              title= {this.state.toolbarText}
              style={styles.toolbar}
              actions={toolbarActions}
              onIconClicked={() => this.setState({toolbarText: 'Icon clicked'})}

              onActionSelected={this.onActionSelected} />
            </View>

      </View>
    )
  }
}
class App extends Component {
  renderScene (route, navigator) {
    return <route.component navigator={navigator} />
  }
  render() {
    return (
      <Navigator
        style={styles.container}
        renderScene={this.renderScene.bind(this)}
        initialRoute={{component: SignIn}}
      />
    );
  }
}

class SignIn extends Component {
  _navigate () {
    this.props.navigator.push({
        component: Payments
    })
  }
  render () {
    return (
      <View>
        <Text>Hello from SignIn</Text>
        <Button onPress={this._navigate.bind(this)} />
      </View>
    )
  }
}

class Payments extends Component {
    render () {
    return (
      <Text>Hello from Payments</Text>
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
  toolbar: {
    height: 56,
    backgroundColor: '#e9eaed',
  }
});
