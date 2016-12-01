/* eslint no-console: 0 */
'use strict';

import React, { Component } from 'react';

import { ListView, StatusBar, StyleSheet, TextInput, View, Text, Image} from 'react-native';

import TimerMixin from 'react-timer-mixin';
import clrs from '../utils/clrs';
import { fetcher } from '../utils/fetcher';

var Button = require('react-native-button');

// GOT IT WORKING

/*
onNotification: (notification) => {
  setTimeout(() => {
    if (notification.message)
      Alert.alert('Alert!', notification.message);
    else
      Alert.alert('Alert!', notification.data.alertBody);
  }, 500);
},
*/

const GPS = React.createClass({

  async postData() {

    // alert("POST DATA SENT")
    // console.log("POST DATA SENT")

    try {

      let postIT = await fetch('https://flonoware.herokuapp.com/homebrew', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lat: parseFloat(this.state.latitude),
          long: parseFloat(this.state.longitude)
        })
      })

      let gpsPOSTJSON = await postIT.json()
      // console.log('gpsPOSTJSON: ')
      // console.log(gpsPOSTJSON)

    } catch (e) {
      console.log("ERROR: ")
      console.log(e)
    }

  },
  async getData() {
    try {
      let response = await fetch('https://flonoware.herokuapp.com/outermost')
      let json = await response.json()
      //console.log('getData()')
      //console.log(json)
       return json
    } catch (err) {
      console.log(null, err)
    }

  },

  watchID: (null :
  ? number),

  getInitialState: function() {

    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      latitude: 0,
      longitude: 0,
      incomingMaxDistance: '0',
      incomingLatitude: '0',
      incomingLongitude: '0',
      incomingLatitudeREST: '182',
      incomingLongitudeREST: '182',
      totalDistance: 'unknown',
      dataFromServer: '',
      max: '1000',
      maxDistanceChecker: () => {

        if (this.props.max) {
          return this.props.max
        } else {
          return this.state.max
        }

      },
      proximityMine: () => {

        // console.log("proximityMine")
        // console.log("max: " + this.state.maxDistanceChecker())
        // console.log("totalDistance: " + this.state.totalDistance)

        if (this.state.totalDistance >= this.state.maxDistanceChecker()) {
          console.log("ALL CLEAR!")
          return "ALL CLEAR!"
        } else {
          console.log("WARNING!");
          return 'WARNING! - CLEAR AND PRESENT DANGER'
        }

      }
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
      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(incomingLat1) * Math.cos(currentLat2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d;

    }
  },

  mixins: [TimerMixin],
  componentDidMount: function() {

    PushNotification.localPushNotification({
      title: 'Title',
      message: 'Message',
    });

    this.setInterval(() => {
      this.getData().then((data) => {

        try {

          var dataFromServer = JSON.stringify(data[0]);
          var incomingLatitudeREST = JSON.stringify(parseFloat(data[0].lat));
          var incomingLongitudeREST = JSON.stringify(parseFloat(data[0].long));

          this.setState({
            dataFromServer
          })
          this.setState({
            incomingLatitudeREST
          });
          this.setState({
            incomingLongitudeREST
          });

        } catch (err) {
          console.log("ERROR: " + err)
        }

      }).catch((error) => {
        console.error(error);
      });
      this.postData()
    }, 60000);

    // 1000 = second
    // 60000 = minute

    navigator.geolocation.getCurrentPosition((position) => {

      var initialPosition = JSON.stringify(position);
      var latitude = JSON.stringify(position.coords.latitude);
      var longitude = JSON.stringify(position.coords.longitude);
      var totalDistance = '';

      this.setState({
        initialPosition
      });
      this.setState({
        latitude
      });
      this.setState({
        longitude
      });
      this.setState({
        totalDistance
      });

    }, (error) => console.log(error.message + " LOAD SAMPLE GPS DATA ERROR"), {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000
    });

  },
  componentWillUnmount: function() {
    navigator.geolocation.clearWatch(this.watchID);
  },

  render() {

    var circular_bg_pic = {
      uri:'https://flonoware.herokuapp.com/img/location.jpg'
    }
    const {totalDistance} = this.state;

    return (

      <View onChangeText={this.state.totalDistance = GPS.calcCrow(this.state.incomingLatitudeREST, this.state.incomingLongitudeREST, this.state.latitude, this.state.longitude),
      this.state.incomingLatitude = this.props.lat,
      this.state.incomingLongitude = this.props.long} style={[styles.baseGPSStyle]}>

                {/*
                  <Text>
                    <Text style={styles.title}>Incoming longitude:
                    </Text>
                    <Text style={styles.gpsData}>{this.state.incomingLongitudeREST}</Text>
                </Text>

                <Text>
                    <Text style={styles.title}>Incoming latitude:
                    </Text>
                    <Text style={styles.gpsData}>{this.state.incomingLatitudeREST}</Text>
                </Text>
                */}

            {/* GOT SAVED */}
            {/* GOT SAVED */}
            {/* GOT SAVED */}

            <View style={styles.headerContainer}>

                <View style={styles.headerContentLeft}>
                   <View style={styles.circle}>
                    <Image source={circular_bg_pic} style={styles.circle}></Image>
                    </View>
                 </View>

               {/* <View style={{width: 50, height: 50,
                 backgroundColor: 'skyblue'}} /> */}

               <View style={styles.headerContentRight}>
                  <Text style={styles.title}>Current : </Text>
                  <View style={styles.gpsDataContainer}>
                    <Text style={styles.gpsData}>{ Number(this.state.longitude).toFixed(2)}</Text>
                    <Text style={styles.gpsDataHandleBar}>|</Text>
                    <Text style={styles.gpsData}>{   Number(this.state.latitude).toFixed(2)}</Text>
                  </View>
                  <View style={styles.gpsDataContainer}>
                  <Text style={styles.title}>longitude</Text>
                    <Text style={styles.invincibleHandleBar}></Text>
                  <Text style={styles.title}>latitude</Text>

                  </View>
                  {/* <Text style={styles.title}>Current latitude: </Text> */}
                  {/* <Text style={styles.gpsData}>{this.state.latitude}</Text> */}
               </View>

            </View>

            {/*
            <View style={styles.contentContainer}>
               <View style={styles.contentLeft}/>

               <View style={styles.contentRight}/>
            </View>
            */}

            {/* GOT SAVED */}
            {/* GOT SAVED */}
            {/* GOT SAVED */}


                {/*
                  <Text>
                    <Text style={styles.title}>Current longitude: </Text>
                    <Text style={styles.gpsData}>{this.state.longitude}</Text>
                  </Text>

                <Text>
                    <Text style={styles.title}>Current latitude:
                    </Text>
                    <Text style={styles.gpsData}>{this.state.latitude}</Text>
                </Text>

                <Text>
                    <Text style={styles.leSpacer}></Text>
                </Text>

                <Text>
                    <Text style={styles.leSpacer}></Text>
                </Text>

                <Text>
                    <Text style={styles.title}>Total Distance:
                    </Text>
                    <Text style={styles.gpsData}>{this.state.totalDistance}</Text>
                </Text>

                <Text>
                    <Text style={styles.leSpacer}></Text>
                    <Text style={styles.leSpacer}></Text>
                    <Text style={styles.leSpacer}></Text>
                    <Text style={styles.leSpacer}></Text>
                    <Text style={styles.leSpacer}></Text>
                </Text>

                <Text>
                    <Text style={styles.title}>Max Distance:
                    </Text>
                    <Text style={styles.gpsData}>{this.state.maxDistanceChecker()}</Text>
                </Text>

                <Text>
                    <Text style={styles.title}>{this.state.proximityMine()}</Text>
                </Text> */}

            </View>
    )
  }
});

var styles = StyleSheet.create({
  headerContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
 },
  circlular_pic_overlay: {
    backgroundColor: "rgba(0, 107, 148, .75)"
 },
  contentContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    flex: .5,
  },
  headerContentLeft: {
    flex: .40,
    height: 150,
    // backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContentRight: {
    flex: .60,
    height: 150,
    // backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentLeft: {
    flex: .5,
    height: 150,
    backgroundColor: 'powderblue',

  },
  contentRight: {
    flex: .5,
    height: 150,
    backgroundColor: 'steelblue'
  },
  gpsDataContainer: {
   flexDirection: 'row',
  },
  gpsData: {
    fontWeight: '300',
    fontSize: 32,
    color: '#fff'
  },
  gpsDataHandleBar: {
    fontWeight: '300',
    fontSize: 32,
    color: '#fff',
    marginRight: 10,
    marginLeft: 10
  },
  invincibleHandleBar: {
    marginRight: 10,
    marginLeft: 10
  },
  title: {
    fontWeight: '500',
    color: '#fff'
  },
  leSpacer: {
    height: 25
  },
  baseGPSStyle: {
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255, .75)',
  }
});

export default GPS;
