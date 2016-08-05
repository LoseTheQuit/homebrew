'use strict';

import React, {Component} from 'react';

import {
  ListView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Navigator,
  Text,
  Image
} from 'react-native';
var Slider = require('react-native-slider');
var loDash = require('lodash');
import clrs from '../utils/clrs'
import GPS from './GPS';
import LatitudeSlider from './LatitudeSlider';
import Rugby from './Rugby';


export default class Main extends Component {

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const data = [
      'Shark',
      'Apple',
      'Math',
      'Ice Cream',
      'Roof',
      'House',
      'Roof',
      'House',
      'Fish',
      'Chicken',
      'Burgers',
      'Music',
      'Waves',
      'Coffee',
    ]

    this.state = {

      artists: dataSource.cloneWithRows(data),
      text: '',
      longitudeTransfer: 0,
      latitudeTransfer: 0,
      // value: 0,

    }

  }

  getMoviesFromApiAsync() {
    return fetch('https://flonoware.herokuapp.com/outermost', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }.then((response) => response.json())
        .then((responseJson) => {
          return responseJson.movies;
        })
        .catch((error) => {
          console.error(error);
        })

    })
  }


  theYolk = (x) => {
    this.setState({ longitudeTransfer })
  }

  renderRow = (text, sId, rId) => {
    return (
      <Text style={styles.textColorWhite}>
        {rId}.{text}
      </Text>
    )
  }

  render() {

    const {artists} = this.state;

    let pic = {
      uri: 'https://hsto.org/files/230/81c/56d/23081c56d81744a686c0916ba25a2e2b.png'
    }

    return (

      <ScrollView style={styles.container}>

        <Text style={styles.homebrew}>homebrew</Text>
        <Text style={styles.title}>GPS</Text>
        <Text style={styles.version}>v0.0.009</Text>

        {/*<TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text }) }
          />

        <Text style={styles.textInput}>
          {this.state.text}
        </Text>*/}

        {/*<Image source={pic} style={{ width: 193, height: 110 }}/>*/}

        <StatusBar barStyle="light-content" backgroundColor="#444" showHideTransition='fade'></StatusBar>

        <Slider

          onValueChange={value => this.setState({ latitudeTransfer: value }) }
          minimumTrackTintColor={'#2ea8ff'}
          maximumrackTintColor={'#005694'}
          thumbTintColor={'#0083e0'} step={.1}
          minimumValue={-180} maximumValue={180}

          />

        <Text style={styles.coordinates}>
          Latitude: {this.state.latitudeTransfer}
        </Text>

        <Slider

          onValueChange={(value) => this.setState({ longitudeTransfer: value }) }
          // onValueChange={ (value) =>  this.state.okSoRenderThis(value)}
          minimumTrackTintColor={'#2ea8ff'}
          maximumrackTintColor={'#005694'}
          thumbTintColor={'#0083e0'} step={.1}
          minimumValue={-180} maximumValue={180}

          />

        <Text style={styles.coordinates}>
          Longitude: {this.state.longitudeTransfer}
        </Text>

        <GPS long={this.state.longitudeTransfer}  lat={this.state.latitudeTransfer}/>

        {/* <Text style={styles.coordinates}>
          This is it!: {this.state.longitudeTransfer}
        </Text> */}

        {/*<ListView dataSource={artists} style={{
           flex: 100,
          alignSelf: 'stretch'
        }} renderRow={this.renderRow}/>*/}

      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#effffe',
  },
  textColorWhite: {
    color: '#ffffff',
  },
  centerThis: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  coordinates: {
    flex: 1,
    width: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#444',
    padding: 1,
    fontSize: 27
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
  searchBox: {
    borderColor: clrs.black,
    height: 40,
    borderWidth: 3
  },
  title: {
    fontWeight: '500',
    fontSize: 25
  },
  homebrew: {
    fontWeight: '100',
    fontSize: 45
  },
  version: {
    fontWeight: '100',
    marginBottom: 50
  }
});
