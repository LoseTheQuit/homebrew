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
      <Text>
        <Text style={styles.title}>homebrew</Text>
        <Text> v0.0.007</Text>
      </Text>
        <Text style={styles.title}>
          GPS
        </Text>

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
          // onValueChange={ (value) =>  this.state.okSoRenderThis(value)}
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

        {/*<ListView dataSource={artists} style={{
          // flex: 100,
          alignSelf: 'stretch',
          }} renderRow={this.renderRow}/>*/}

      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'justifyContent',
    //  alignItems: 'center',
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
    marginBottom: 25,
    fontSize: 25
  },
});
