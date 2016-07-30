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

export default class Rugby extends Component {

  constructor(props) {
  super(props);

      this.state=  {
      title: 'MyScene',
      showText: true


      // This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
 
      // function calcCrow(lat1, lon1, lat2, lon2) {
      //
      //   var R = 6371; // km
      //   var dLat = (lat2 - lat1) * Math.PI / 180;
      //   var dLon = (lon2 - lon1) * Math.PI / 180;
      //   var lat1 = (lat1) * Math.PI / 180;
      //   var lat2 = (lat2) * Math.PI / 180;
      //
      //   var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      //     Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
      //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      //   var d = R * c;
      //   return d;
      //
      // }

      //
      // // Converts numeric degrees to radians
      // function toRad(Value) {
      //   return Value * Math.PI / 180;
      // }

    }
    setInterval(() => {
    this.setState({ showText: !this.state.showText });
  }, 1000);
  }

  render() {
      let display = this.state.showText ? this.props.text : 'OFF';
    return (
      <View>
        <Text>Method is being used by : {this.props.title}.</Text>
        <Text>{display}</Text>
      </View>
    )
  }

}
