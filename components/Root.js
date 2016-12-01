import React, { Component, PropTypes } from 'react';
import { Navigator, Text, TouchableHighlight, View } from 'react-native';

/*

This file and the Main.JS file  are
on the same level.

./ is good
is used to traverse the same level and
access the files in the folder.

*/

import Main from './Main';
import Rugby from './Rugby';
import Cricket from './Cricket';
import Terminal from './Terminal';
import CoreCamera from './CoreCamera';
import ToolBarMenu from './ToolBarMenu';
import VideoPlayer from './VideoPlayer';

// console.error("TEST");

// import BadInstagramCloneApp from './coreCamera'
export default class Root extends Component {

  render() {

    return (

      <Navigator
      initialRoute={{
        // title: 'homebrew',
        // id: 'Cricket',
        // id: 'ToolBarMenu',
        id: 'Terminal',
       //  max: this.state.maxDistance,
       max:  1000,
        passProps: {
         //  max: this.state.maxDistance
          max:  1000
        },
        index: 0,


      }}

      configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight}

      renderScene = {
      this.navigatorRenderScene
      }

      />
    )
  }

  navigatorRenderScene(route, navigator) {

    _navigator = navigator;
    switch (route.id) {
      case 'Cricket':
        return (<Cricket navigator={navigator} title="Cricket"/>)
      case 'Terminal':
        return (<Terminal navigator={navigator} title="Terminal"/>)
      case 'Main':
        return (<Main navigator={navigator} title="Main"/>)
      case 'Rugby':
        return (<Rugby navigator={navigator} title="Rugby"/>)
      case 'VideoPlayer':
        return (<VideoPlayer navigator={navigator} title="VideoPlayer"/>)
      case 'ToolBarMenu':
        return (<ToolBarMenu navigator={navigator} title="ToolBarMenu"/>)
      case 'CoreCamera':
        return (<CoreCamera navigator={navigator} title="CoreCamera"/>)
      default:
    }
  }
}
