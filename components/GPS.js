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

// GOT IT WORKING
const GPS = React.createClass({

  watchID: (null: ?number),

  getInitialState: function() {
    return {

      initialPosition: 'unknown',
      lastPosition: 'unknown',
      latitude: 'unknown',
      longitude: 'unknown',
      totalDistance: 'unknown',
      okSoRenderThis: function () {
        alert('THIS IS ON!')
      }

    };

  },  okSoRenderThis: function () {
      alert('THIS IS ON!')
    },


  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => {

        var initialPosition = JSON.stringify(position);

        var latitude = JSON.stringify(position.coords.latitude);
        var longitude = JSON.stringify(position.coords.longitude);

        var totalDistance = calcCrow(latitude, longitude, 59.3225525, 13.4619422).toFixed(1);
        // var totalDistance = calcCrow(59.3293371, 13.4877472, 59.3225525, 13.4619422).toFixed(1);

        this.setState({ initialPosition });
        this.setState({ latitude });
        this.setState({ longitude });
        this.setState({ totalDistance });


        // This function takes in latitude and longitude of two location and returns the distance between them as the crow flies (in km)
        function calcCrow(lat1, lon1, lat2, lon2) {
          var R = 6371; // km
          var dLat = toRad(lat2 - lat1);
          var dLon = toRad(lon2 - lon1);
          var lat1 = toRad(lat1);
          var lat2 = toRad(lat2);

          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c;
          return d;

        }

        // Converts numeric degrees to radians
        function toRad(Value) {
          return Value * Math.PI / 180;
        }

      },
      (error) => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {

      var lastPosition = JSON.stringify(position);
      this.setState({ lastPosition });


    });
  },

  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  render() {
    return (
      <View>

        <Text>
          <Text style={styles.title}>Initial position: </Text>
          <Text>{this.state.initialPosition}</Text>
        </Text>

        <Text>
          <Text style={styles.title}>Current position: </Text>
          <Text>{this.state.lastPosition}</Text>
        </Text>

        <Text>
          <Text style={styles.title}>Current longitude: </Text>
          <Text>{this.state.longitude}</Text>
        </Text>
        <Text>
          <Text style={styles.title}>Current latitude: </Text>
          <Text>{this.state.latitude}</Text>
        </Text>

        <Text>
          <Text style={styles.title}>totalDistance: </Text>
          <Text>{this.state.totalDistance}</Text>
        </Text>

        <Text>
          <Text onChangeText={() => this.okSoRenderThis } style={styles.title}>lat: </Text>
          <Text>{this.props.lat}{this.okSoRenderThis}</Text>
        </Text>

        <Text>
          <Text style={styles.title}>long: </Text>
          <Text>{this.props.long}</Text>
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
