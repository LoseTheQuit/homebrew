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

  statics: {
    calcCrow: (lat1, lon1, lat2, lon2) => {

      var R = 6371; // km
var toRad = Math.PI / 180;
var dLat = (lat2 - lat1) * toRad;
var dLon = (lon2 - lon1) * toRad;
var lat1 = (lat1) * toRad;
var lat2 = (lat2) * toRad;
var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
var d = R * c;
return d;

    }


   },

getInitialState: function() {

  return {
    initialPosition: '1',
    lastPosition: 'unknown',
    latitude: 'unknown',
    longitude: 'unknown',
    totalDistance: 'unknown',
     calcCrow: (lat1, lon1, lat2, lon2) => {

          var R = 6371; // km
    var toRad = Math.PI / 180;
    var dLat = (lat2 - lat1) * toRad;
    var dLon = (lon2 - lon1) * toRad;
    var lat1 = (lat1) * toRad;
    var lat2 = (lat2) * toRad;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d;

        }
  };

},

componentDidMount: function() {


  navigator.geolocation.getCurrentPosition(
    (position) => {

      var initialPosition = JSON.stringify(position);
      var latitude = JSON.stringify(position.coords.latitude);
      var longitude = JSON.stringify(position.coords.longitude);
      var totalDistance = GPS.calcCrow(latitude, longitude, 180.3225525, 180.4619422).toFixed(1);

      this.setState({ initialPosition });
      this.setState({ latitude });
      this.setState({ longitude });
      this.setState({ totalDistance });

    },
    (error) => alert(error.message + " LOAD SAMPLE GPS DATA"),
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

  var display = 'THIS IS A ANOTHER TEST'
  const {totalDistance} = this.state;


  return (
 

    <View onChangeText={this.state.totalDistance = GPS.calcCrow(this.props.lat, this.props.long, this.state.latitude, this.state.longitude) } >
      {/*<View onChangeText={this.setState({ totalDistance: 72727 })}>*/}

      {/* onChangeText={   this.setState({  totalDistance:    this.state.calcCrow(this.props.lat, this.props.long, this.state.latitude, this.state.longitude)}) } */}
      <Text >
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
        <Text style={styles.title}>lat: </Text>
        <Text>{this.props.lat}</Text>
      </Text>

      <Text >
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
