'use strict';

import React, {
  Component
} from 'react';

import {
  ListView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,

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
      <View style={styles.container}>
        <Text style={styles.largeText}>Method is being used by : {this.props.title}.</Text>
        <Text>{display}</Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
    // color: "#eeeeee",
    backgroundColor: "#ae4477"
  },
    largeText:{
    flex: 1,
    fontSize: 50,
    fontFamily: "Helvetica"
  },
  button:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'

  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    fontFamily: "Georgia"

  }


})
