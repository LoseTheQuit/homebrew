'use strict';

import React, { Component } from 'react';
import { ListView, StyleSheet, View, TouchableHighlight, Text } from 'react-native';

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

const RestView = React.createClass({
  async getSomeRest() {
    try {
      console.log('getSomeRest(): START')
      var response = await fetch('https://flonoware.herokuapp.com/homebrew')
      var json = await response.json().then((data) => data)
      console.log('getSomeRest(): FINISH')
      return json
    } catch (err) {
      console.log(null, err)
    }
  },
  renderRow: (text, sId, rId) => {
    return (
      <View>
      { /* <TouchableHighlight style={styles.button}>
          <Text style={styles.buttonText}>Enter</Text>
      </TouchableHighlight> */ }
      <Text
      style={styles.restData}>
            {rId}.{text}
            </Text>
      </View>

    )
  },
  getInitialState() {
    return {
      restData: dataSource.cloneWithRows(['Loading...'])
     };
  },
  genRows: () => {
     (async () => {
       try {
        console.log('genRows(): START')
        return await fetch('https://flonoware.herokuapp.com/homebrew')
            .then((x) => x.json())
            .then((responseData) => {
              if (responseData) {
                console.log('genRows() responseData: ')
                console.log(responseData)
              }
            })
            .done();
        //////
        this.setState({
          restData: dataSource.cloneWithRows(responseData),
        });
        ////////
        return json
      } catch (err) {
        console.log(null, err)
      }
    })();

  },
  componentDidMount: function() {
    this.genRows()

    this.setState({
      restData: dataSource.cloneWithRows(['Loading Rest Data...']),
    });

    this.getSomeRest().then((data) => {
      console.log('getSomeRest() data: ')
      console.log(data)
      var dataFromServer = JSON.stringify(data);
      this.setState({
        dataFromServer
      })
    });
  },
  render() {

    const {restData} = this.state;

    return (

      <View>
      <Text style={styles.restData}>
       {this.state.dataFromServer}
      </Text>

      {/* <ListView dataSource={restData} style={styles.listView} renderRow={this.renderRow} /> */}

      </View>
      );
  }
});

const styles = StyleSheet.create({

  listView: {
    flex: 100,
    alignSelf: 'stretch'
  },
  restData: {
    color: '#ffffff'
  },
  button: {
    flex: 1,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    height: 70,
    borderWidth: 1,
  }
})

export default RestView;
