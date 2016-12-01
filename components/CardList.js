'use strict';

import React, { Component } from 'react';
import { Navigator, ListView, TouchableHighlight, StyleSheet, View, Text } from 'react-native';

export default class RestList extends Component{

  constructor(props) {
    super(props);
    // this._buttonPress = this._buttonPress.bind(this);
      this.state = {
      dataArr: [],
      loaded: false,
    }
  }

    _buttonPress = (event) =>  {
      console.log(Object.keys(event));
       this.props.navigator.push({
          id: 'VideoPlayer'
        })
    }

  genRows() {
    (async () => {
      var that = this;
      try {
        console.log('genRows(): START')
        return await fetch('https://flonoware.herokuapp.com/homebrew')
            .then((x) => x.json())
            .then((responseData) => {
              if (responseData) {

                this.setState({
                  loaded: true,
                  dataArr: responseData
                });

                console.log('genRows() LOADED! ')
                console.log(responseData)

              }
            })
            .done();
      } catch (err) {

        console.log("ERROR: ");
        console.log(null, err);

      }
    })();
  }

  componentWillMount() {
    // navigator.geolocation.clearWatch(this.watchID);
    this.genRows();
  }

  calcRow(incomingLat1, incomingLon1) {

    var currentLat2 = -84;
    var  currentLon2= 55;
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

    if (d >= 1) {
      return (d).toFixed(2) + " miles away";

    } else {
      return (d).toFixed(2) + " mile away";

    }

  }

  renderLoadingView() {
    return (
    <View style={[styles.cardContainer, styles.loading]}>
      <Text style={styles.restData}>
        Loading ...
      </Text>
    </View>
    )
  }

  renderGPSDataFromServer =() => {

    return this.state.dataArr.map( (data, i) => {
      return(

        <View style={[styles.cardContainer, styles.modularBorder, styles.basePadding]} key={i}>

          <View style={styles.cardContentLeft}>
            <TouchableHighlight style={styles.button}
          onPress={this._buttonPress.bind(this)}>
            {/* onPress={this._buttonPress()}> */}
              <Text style={styles.restData}>View Video</Text>
            </TouchableHighlight>
          </View>

          <View style={styles.cardContentRight}>

            <View style={styles.gpsDataContainer}>

            <Text style={styles.userID}>{data.userID}</Text>
              {/* <Text style={styles.gpsData}>{Number(data.lat).toFixed(2)}</Text>
              <Text style={styles.gpsDataHandleBar}>|</Text>
              <Text style={styles.gpsData}>{Number(data.long).toFixed(2)}</Text> */}
            </View>

            <Text  style={styles.gpsData}>
              {this.calcRow(data.lat, data.long)}
            </Text>

          </View>

        </View>
      );
    });
 }

  render = ()=> {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return(
      <View>
        <View>
          {this.renderGPSDataFromServer()}
        </View>
      </View>

    )
  }};

const styles = StyleSheet.create({
  listViewContainer: {
    flex: 1,
    alignSelf: 'stretch'
  },
  cardContainer:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContentLeft: {
    flex: .40,
    height: 150,
    // backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContentRight: {
    flex: .60,
    height: 150,
    // backgroundColor: 'steelblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  restData: {
    color: '#fff'
  },
  modularBorder: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, .75)',
  },
  basePadding: {
    padding: 10
  },
  button: {
    marginTop: 30,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, .75)',
  },
  gpsDataContainer: {
   flexDirection: 'row',
  },
   gpsData: {
     fontWeight: '300',
     fontSize: 24,
     color: '#fff'
   },
   userID: {
     fontWeight: '300',
     fontSize: 18 ,
     color: '#fff'
   },
   gpsDataHandleBar: {
     fontWeight: '300',
     fontSize: 24,
     color: '#fff',
     marginRight: 10,
     marginLeft: 10
   },
})
