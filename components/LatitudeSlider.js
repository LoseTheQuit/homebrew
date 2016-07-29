/* eslint no-console: 0 */
'use strict';

import React, {Component} from 'react';
var Slider = require('react-native-slider');
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

// GOT IT WORKING
const LatitudeSlider = React.createClass({

  watchID: (null: ?number),

  getInitialState: function() {
    return {

      totalDistance: 'unknown',
      value: 0,
      okSoRenderThis: function () {
        alert('THIS IS ON!')
      }

    };

  },

  render() {
    return (
      <View>
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({ value }) }
          // onValueChange={ (value) =>  this.state.okSoRenderThis(value)}
          minimumTrackTintColor={'#2ea8ff'}
          maximumrackTintColor={'#005694'}
          thumbTintColor={'#0083e0'} step={1}
          minimumValue={-180} maximumValue={180}

          />


        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({

  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    color: '#00a3e0'
  },

});

export default LatitudeSlider;
