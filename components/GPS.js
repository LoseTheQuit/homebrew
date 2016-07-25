/* eslint no-console: 0 */
'use strict';

import React, {Component} from 'react';

import {
  ListView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image
} from 'react-native';

import clrs from '../utils/clrs';

var GPS = React.createClass({

  watchID: (null: ?number),
  //
    getInitialState: function() {
      return {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
      };
    },
      componentDidMount: function() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            var initialPosition = JSON.stringify(position);
            this.setState({initialPosition});
          },
          (error) => alert(error.message),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
          var lastPosition = JSON.stringify(position);
          this.setState({lastPosition});
        });
      },

      componentWillUnmount: function() {
        navigator.geolocation.clearWatch(this.watchID);
      },

  render() {
    return (
       <View>
       <Text>
         <Text style={styles.title}>homebrew</Text>
         <Text> v0.0.007 </Text>
       </Text>
            <Text>
              <Text style={styles.title}>Initial position: </Text>
              {this.state.initialPosition}
            </Text>
            <Text>
              <Text style={styles.title}>Current position: </Text>
              {this.state.lastPosition}
            </Text>
          </View>
     );
  }
});

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    color: '#00a3e0'
  },
});
export default GPS;
