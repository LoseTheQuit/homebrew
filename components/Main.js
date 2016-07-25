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

import clrs from '../utils/clrs'
import GPS from './GPS';
import Rugby from './Rugby';


export default class theOtherMain extends Component {

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
      text: ''
    }

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

      <GPS/>
        <TextInput
          style={styles.textInput}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text }) }
          />

        <Text style={styles.textInput}>
          {this.state.text}
        </Text>

        <Image source={pic} style={{ width: 193, height: 110 }}/>
        <StatusBar barStyle="light-content" backgroundColor="#444" showHideTransition='fade'> </StatusBar>

        <StatusBar barStyle="default"></StatusBar>
        <TextInput style={styles.searchBox}/>

        <ListView dataSource={artists} style={{
          // flex: 100,
          alignSelf: 'stretch',

        }} renderRow={this.renderRow}/>

            <Navigator
              initialRoute={{ title: 'My Initial Scene', index: 0 }}
              renderScene={(route, navigator) =>
                <Rugby

                  title={route.title}

                  // Function to call when a new scene should be displayed
                  onForward={ () => {
                    const nextIndex = route.index + 1;
                    navigator.push({
                      title: 'Scene ' + nextIndex,
                      index: nextIndex,
                    });
                  }}

                  // Function to call to go back to the previous scene
                  onBack={() => {
                    if (route.index > 0) {
                      navigator.pop();
                    }
                  }}
                />
              }
            />


      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  justifyContent: 'justifyContent',
  //  alignItems: 'center',
    backgroundColor: '#c2c2c2',
  },
  textColorWhite: {
    color: '#ffffff',

  },
  centerThis: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  textInput: {
    flex: 1,
    width: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    padding: 10,
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
  },
});
