'use strict';

import React, {Component} from 'react';

import {
  ListView,
  StatusBar,
  StyleSheet,
  TextInput,
  Text,
  View
} from 'react-native';

import clrs from '../utils/clrs';

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
      'Fish',
      'Chicken',
      'Burgers'
    ]

    this.state = {
      artists: dataSource.cloneWithRows(data)
    }


    //         navigator.geolocation.getCurrentPosition(
    //         (position) => {
    //         var initialPosition = JSON.stringify(position);
    //         this.setState({initialPosition});
    //       },
    //       (error) => alert(error.message),
    //       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    //     );

    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({ lastPosition });
    });

  }

  renderRow = (text, sId, rId) => {

    return (
      <Text style={styles.row}>
        {rId}.{text}
      </Text>

      <Text>Test
      </Text>
    )
  }

  render() {

    const {artists} = this.state;

    return (

      <View style={styles.container}>

        <StatusBar barStyle="light-content">
          <Text>
            Hello World!And Some More Stuff
          </Text>
               <Text>
      Rhis is a testsdsd
          </Text>
         </StatusBar>

        <StatusBar barStyle="default"></StatusBar>
        <TextInput style={styles.searchBox}/>
        <Text>Checking the This is a n cxzc sother test sdasGos, And THIS SHOULD WORK</Text>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>

        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
        <ListView dataSource={artists} style={{
          flex: 2,
          alignSelf: 'stretch'
        }} renderRow={this.renderRow}/>



      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
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

exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function (): ReactElement<any> {
      return <GeolocationExample />;
    },
  }
];

var GeolocationExample = React.createClass({
  watchID: (null: ?number),

  getInitialState: function() {
    return {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  },

  componentDidMount: function() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({ initialPosition });
      },
      (error) => alert(error.message),
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

  render: function() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
});
