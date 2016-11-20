'use strict';

import React, { Component } from 'react';
import { ListView, TouchableHighlight, StyleSheet, View, Text } from 'react-native';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

export default class RestList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      dataSource: ds.cloneWithRows(['a', 'bb', 'ccc']),
      _buttonPress: () => {
        this.props.navigator.push({
          id: 'Main'
        })
      }
    }
  }
  _buttonPress() {
    this.props.navigator.push({
      id: 'Main'
    })
  }

  renderRow(text, sId, rId) {
    return (
      <View>
        { /* <Text style={styles.restData}>{rId}: {text.long}</Text> */ }
        <Text style={styles.restData}>{rId}: {text}</Text>
        { /* <TouchableHighlight style={styles.button} onPress={this.state._buttonPress.bind(this)}>
            <Text style={styles.restData}>Enter</Text>
        </TouchableHighlight> */ }
      </View>
    )
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
                console.log('genRows() responseData: ')
                console.log(responseData)

                var finalResult = responseData.map(res => {
                  // return 'Lat: ' + res.lat + ' Long: ' + res.long + '\n'
                  var moJO = (
                  <Text style={styles.restData}>Lat: {res.lat}</Text>
                  );
                  return moJO;
                //  return res
                })

                console.log('genRows() EDITED: ')
                console.log(finalResult)

                var _ds = JSON.parse(JSON.stringify(finalResult));
                // clone datasorce, force renderRow update
                console.log('_ds:')
                console.log(_ds)
                this.setState({
                  loaded: true,
                  // dataSource: that.state.dataSource.cloneWithRows(_ds),
                  dataSource: that.state.dataSource.cloneWithRows(finalResult)
                });
              }
            })
            .done();
      } catch (err) {
        console.log("ERROR: ")
        console.log(null, err)
      }
    })();
  }

  componentWillMount() {
    this.genRows();
  }
  renderLoadingView() {
    return (  <View style={styles.loading}>
      <Text>
        Loading ...
      </Text>
	  </View>
    )
  }
  renderList() {
    return (
      <View>
      <ListView dataSource={this.state.dataSource} style={styles.listView} renderRow={this.renderRow} />
    </View>
    )
  }
  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }
    return this.renderList();
  }
}

const styles = StyleSheet.create({
  listView: {
    flex: 100,
    alignSelf: 'stretch'
  },
  restData: {
    color: '#ffffff'
  },
})
