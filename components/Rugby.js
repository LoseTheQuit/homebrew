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
