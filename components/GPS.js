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
import {fetcher} from '../utils/fetcher';

// GOT IT WORKING
const GPS = React.createClass({

  watchID: (null: ?number),

  getInitialState: function() {

    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      latitude: 0,
      longitude: 0,
      incomingLatitude: '182',
      incomingLongitude: '182',
      totalDistance: 'unknown',
      fromServer: 'TEST = fromServer'
    };

  },

  /*
THIS METHOD GATHERS THE TWE INCOMING COORDINATES
AND THEN THE CURRENT COORDINATES TO CALCULATE AND
RETURNS THE DISTANCE BETWEEN THE TWO POINTS
  */

  statics: {
    calcCrow: (incomingLat1, incomingLon1, currentLat2, currentLon2) => {

        var R = 6371; // km
var toRad = Math.PI / 180;
var dLat = (currentLat2 - incomingLat1) * toRad;
var dLon = (currentLon2 - incomingLon1) * toRad;
var incomingLat1 = (incomingLat1) * toRad;
var currentLat2 = (currentLat2) * toRad;
var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(incomingLat1) * Math.cos(currentLat2);
var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
var d = R * c;
return d;

    },

getLastAdded: () => {
  let exData;
  fetch('https://flonoware.herokuapp.com/outermost')
    .then((response) => response.json().then(function (data) {
      // console.log(JSON.stringify(data))
      exData = JSON.stringify(data)
      alert(exData)
      return exData.toString()
    })
    )
    // .then((responseJson) => {
    //   return 'responseJson';
    // })
    .catch((error) => {
      alert(error)
      console.error(error);
    });
    // return exData;
    return   fetch('https://flonoware.herokuapp.com/outermost')
        .then((response) => response.json()
        .then(  (data) => {
          // console.log(JSON.stringify(data))
          exData = JSON.stringify(data)
          //   this.setState({ initialPosition });
          alert(exData)
          return exData.toString()
        })
        )
        // .then((responseJson) => {
        //   return 'responseJson';
        // })
        .catch((error) => {
          alert(error)
          console.error(error);
        });;
},

   },
componentDidMount: function() {

  // this.setState(){
  // }

  navigator.geolocation.getCurrentPosition(
    (position) => {

      var initialPosition = JSON.stringify(position);
      var latitude = JSON.stringify(position.coords.latitude);
      var longitude = JSON.stringify(position.coords.longitude);
      var totalDistance = '';

      // var totalDistance = GPS.calcCrow(180.3225525, 180.4619422,latitude, longitude ).toFixed(1);

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

    var initialPosition = JSON.stringify(position);
    var incomingLatitude = JSON.stringify(position.coords.latitude);
    var incomingLongitude = JSON.stringify(position.coords.longitude);

    this.setState({ initialPosition });
    this.setState({ incomingLatitude });
    this.setState({ incomingLongitude });

  });
},

componentWillUnmount: function() {
  navigator.geolocation.clearWatch(this.watchID);
},

render() {
  debugger;
  var display = 'THIS IS A ANOTHER TEST'
  const {totalDistance} = this.state;

  return (


    <View onChangeText={this.state.totalDistance = GPS.calcCrow(this.props.lat, this.props.long, this.state.latitude, this.state.longitude) ,  this.state.incomingLatitude = this.props.lat,this.state.incomingLongitude = this.props.long} >

      {/*<Text >
        <Text style={styles.title}>Incoming position: </Text>
        <Text>{this.state.initialPosition}</Text>
      </Text>*/}

      <Text>
        <Text style={styles.leSpacer}></Text>
      </Text>

      <Text>
        <Text style={styles.title}>Incoming longitude: </Text>
        <Text>{this.state.incomingLongitude}</Text>
      </Text>

      <Text>
        <Text style={styles.title}>Incoming latitude: </Text>
        <Text>{this.state.incomingLatitude}</Text>
      </Text>

      <Text>
        <Text style={styles.leSpacer}></Text>
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
        <Text style={styles.leSpacer}></Text>
      </Text>

      <Text>
        <Text style={styles.title}>totalDistance: </Text>
        <Text>{this.state.totalDistance}</Text>
      </Text>

      <Text>

        {JSON.stringify(GPS.getLastAdded()) + ' FROM GPS'}

      </Text>

      {/* <Text>
{JSON.stringify(fetch( 'https://flonoware.herokuapp.com/homebrew'))}
</Text> */}
    </View>
  );
}
});

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
    color: '#00a3e0'
  },
  leSpacer: {
    height: 25

  }
});

export default GPS;
