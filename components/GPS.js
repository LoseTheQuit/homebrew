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
  Image,

} from 'react-native';

import TimerMixin from 'react-timer-mixin';
import clrs from '../utils/clrs';
import {fetcher} from '../utils/fetcher';
import VideoRecorder from 'react-native-video-recorder';
var Button = require('react-native-button');

// GOT IT WORKING
const GPS = React.createClass({

  async getData() {
    try {
      let response = await fetch('https://flonoware.herokuapp.com/outermost')
      let json = await response.json()
      console.log(json)
      debugger;
      return json
    } catch (err) {
      // had to remvoe this because I coun't get the screen to stop there was an error
      // alert(null, err)
    }
  },

  watchID: (null: ?number),

  getInitialState: function() {

    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      latitude: 0,
      longitude: 0,
      incomingLatitude: '0',
      incomingLongitude: '0',
      incomingLatitudeREST: '182',
      incomingLongitudeREST: '182',
      totalDistance: 'unknown',
      dataFromServer: '',
    };

  },

  /*
THIS METHOD GATHERS THE TWE INCOMING COORDINATES
AND THEN THE CURRENT COORDINATES TO CALCULATE AND
RETURNS THE DISTANCE BETWEEN THE TWO POINTS
  */

  statics: {
    calcCrow: (incomingLat1, incomingLon1, currentLat2, currentLon2) => {

// km
              var R = 6371;
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

   },  

mixins: [TimerMixin],
  componentDidMount: function() {

    this.setInterval(() => {
      this.getData().then((data) => {

        var dataFromServer = JSON.stringify(data);
        // var incomingLatitudeREST = JSON.stringify(data[0].lat);
        //var incomingLongitudeREST =  JSON.stringify(data[0].long);

        try {

          var dataFromServer = JSON.stringify(data[0]);
          var incomingLatitudeREST = JSON.stringify(data[0].lat);
          var incomingLongitudeREST =  JSON.stringify(data[0].long);
          console.log(incomingLatitudeREST)
          console.log(incomingLongitudeREST)
        }

        catch(err) {
          console.log("ERROR: " + err)

        }

        this.setState({ dataFromServer })
        this.setState({ incomingLatitudeREST });
        this.setState({ incomingLongitudeREST });

      }).catch((error) => {

        console.error(error);
      })
    }, 1000);

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
      (error) => console.log(error.message + " LOAD SAMPLE GPS DATA"),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({ lastPosition });

      var initialPosition = JSON.stringify(position);
      var incomingLatitude = JSON.stringify(position.coords.latitude);
      var incomingLongitude = JSON.stringify(position.coords.longitude);

      this.setState({ initialPosition });
      this.setState({ incomingLatitudeREST });  
      this.setState({ incomingLongitudeREST });

    });
  },
  _handlePress(event) {
     console.log('Pressed!');

     // this.refs.recorder.record();
     // alert('Pressed!');

   },
componentWillUnmount: function() {
  navigator.geolocation.clearWatch(this.watchID);
},

render() {
  debugger;
  var display = 'THIS IS A ANOTHER TEST'
  const {totalDistance} = this.state;

  return (

    <View onChangeText={this.state.totalDistance = GPS.calcCrow(this.state.incomingLatitudeREST, this.state.incomingLongitudeREST, this.state.latitude, this.state.longitude), this.state.incomingLatitude = this.props.lat,this.state.incomingLongitude = this.props.long }>

      {/* , this.state.incomingLatitude = this.props.lat,this.state.incomingLongitude = this.props.long */}

      {/*<Text >
         <Text style={styles.title}>Incoming position: </Text>
         <Text>{this.state.initialPosition}</Text>
         </Text>*/}

      {/* <VideoRecorder
      onPress={this._handlePress}
      style={styles.recordR}
      ref= {function(input) {
      if (input  === '123') {
      // input.focus();
      this.refs.recorder.record();
      alert("All done!")
    }
  }}
  onRecordingStarted={() => console.log('Started')}
  onRecordingFinished={(e) => console.log(e.nativeEvent.file)}
  onCameraAccessException={() => alert('No permission for camera')}
  onCameraFailed={() => alert('Camera failed')}
  type="front"
  videoEncodingBitrate={7000000}
  videoEncodingFrameRate={30}
/> */}

      <Text>
        <Text style={styles.leSpacer}></Text>
      </Text>

      <Text>
        <Text style={styles.title}>Incoming longitude: </Text>
        <Text>{this.state.incomingLongitudeREST}</Text>
      </Text>

      <Text>
        <Text style={styles.title}>Incoming latitude: </Text>
        <Text>{this.state.incomingLatitudeREST}</Text>
      </Text>

      <Text>
        <Text style={styles.title}>Incoming Slider longitude: </Text>
        <Text>{this.state.incomingLongitude}</Text>
      </Text>

      <Text>
        <Text style={styles.title}>Incoming Slider latitude: </Text>
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
        <Text>{this.state.totalDistance }</Text>
      </Text>

      <Text>
      {this.state.dataFromServer}
      </Text>

             {/* <TextInput
            ref={function(input) {
              if (input  === '123') {
                // input.focus();
                alert("All done!")
              }
            }} /> */}

          {/* this.refs.recorder.record(); */}
          {/* this.refs.recorder.stop(); */}

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
  ,
  // recordR: {
  //   height: 100,
  //   width: 100,
  //   backgroundColor: clrs.white
  // }
  //
});

export default GPS;
