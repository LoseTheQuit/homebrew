'use strict';

import React, { Component, PropTypes } from 'react';
import { ListView, TouchableHighlight, Navigator, StyleSheet, View, Text } from 'react-native';

export default class RestList extends Component {

  constructor(props) {
    super(props);
     this.state = {
      dataArr: [],
      loaded: false,
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
      <View style={[styles.restListOverLay, styles.modularBorder, , styles.basePadding]}>

        <Text style={styles.restData}>{rId}:</Text>
        <Text style={styles.restData}>{text}</Text>

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
        console.log("ERROR: ")
        console.log(null, err)
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

renderGPSDataFromServer() {
  const {loaded} = this.state;
  const {_buttonPress} = this.state;
  // const {props} = this.props.bind(this);

  return this.state.dataArr.map(function(news, i){
    return(
      <View style={[styles.cardContainer, styles.modularBorder, styles.basePadding]} key={i}>
      <View style={styles.cardContentLeft}>
      </View>
      <View style={styles.cardContentRight}>

      <Text>{i}</Text>
      <Text style={styles.restData}>{news.lat}</Text>
           <Text style={styles.restData}>{news.long}</Text>
          <TouchableHighlight style={styles.button} onPress={ _buttonPress.bind(this)}>
          {/* onPress={ _buttonPress().bind(this)} */}
          {/* onPress={this.state._buttonPress()} */}
              <Text style={styles.restData}>Enter</Text>
          </TouchableHighlight>
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
    backgroundColor: 'powderblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContentRight: {
    flex: .60,
    height: 150,
    backgroundColor: 'steelblue',
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
  }
})
