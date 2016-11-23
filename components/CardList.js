'use strict';

import React, { Component } from 'react';
import { ListView, TouchableHighlight, StyleSheet, View, Text } from 'react-native';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

export default class RestList extends Component {

  constructor(props) {
    super(props);
      this._buttonPress = this._buttonPress.bind(this);
      // this.onPress = this.onPress.bind(this);
     this.state = {
      dataSource: ds.cloneWithRows(['a', 'bb', 'ccc']),
      dataArr: [],
      loaded: false,
       _buttonPress:  function() {
        this.props.navigator.push({
          id: 'Main'
        })
      }
    }
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
    this.genRows();
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

  _buttonPress = () =>  {
    this.props.navigator.push({
      id: 'Main'
    })
  }

renderGPSDataFromServer() {

  const {loaded} = this.state;
  const {state} = this.state;
  // const {props} = this.props.bind(this);

  return this.state.dataArr.map(function(data, i){
    return(
      <View style={[styles.cardContainer, styles.modularBorder, styles.basePadding]} key={i}>

        <View style={styles.cardContentLeft}>
          <TouchableHighlight style={styles.button}
          >
          {/* onPress={this._buttonPress().bind(this)} */}
          {/* onPress={ _buttonPress().bind(this)} */}
          {/* onPress={ _buttonPress().bind(this)} */}
          {/* onPress={this.state._buttonPress()}  */}
          <Text style={styles.restData}>View Video</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.cardContentRight}>
          <Text style={styles.restData}>{i}</Text>
          <View style={styles.gpsDataContainer}>
            <Text style={styles.gpsData}>{Number(data.lat).toFixed(2)}</Text>
            <Text style={styles.gpsData}>{Number(data.long).toFixed(2)}</Text>
          </View>
        </View>

      </View>
    );
  });
}

render() {
  if (!this.state.loaded) {
    return this.renderLoadingView();
  }
  return(
    <View>
      {this.renderGPSDataFromServer()}
    </View>
  )
}}

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
})
