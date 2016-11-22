'use strict';

import React, { Component } from 'react';
import { ListView, TouchableHighlight, StyleSheet, View, Text } from 'react-native';

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

var dataArr = [];
var dataArrText = "THIS IS A TEST!";
export default class RestList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataArr: [],
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
      <View style={[styles.restListOverLay, styles.modularBorder, , styles.basePadding]}>

        <Text style={styles.restData}>{rId}:</Text>
        <Text style={styles.restData}>{text}</Text>

        <TouchableHighlight style={styles.button}>
            {/* onPress={this.state._buttonPress().bind(this)} */}
            <Text style={styles.restData}>Enter</Text>
        </TouchableHighlight>

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

                this.setState({
                  dataArr: responseData
                });

                // var finalResult = JSON.stringify(responseData);
                responseData.forEach(function(news, i){
                     dataArr.push(
                       <View key={i}>
                         <Text>{news.long}</Text>
                         <View>
                           <Text>{news.lat}</Text>
                         </View>
                       </View>);
                   });
                var finalResult = responseData.map(res => {
                  // return 'Lat: ' + res.lat + ' Long: ' + res.long + '\n'

                  var moJO = (
                    <Text style={styles.restData}>Lat: {res.lat}</Text>
                  );

                   return moJO;

                })

                console.log('genRows() EDITED: ')
                //  console.log(finalResult)

                var _ds = JSON.parse(JSON.stringify(finalResult));
                // clone datasorce, force renderRow update

                // console.log('_ds:')
                // console.log(_ds)

                this.setState({
                  loaded: true,
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
    return (
    <View style={styles.loading}>
      <Text>
        Loading ...
      </Text>
	  </View>
    )
  }
  renderList() {
    return (
      <View>

      {/*
      <Text>
        {this.state.dataArr}
      </Text>
      */}

      <Text>
      {this.getGPSDataFromServer()}
      </Text>

      {/* <Text>
      {this.state.dataArr[0].long}
      </Text> */}

      {/* <ListView dataSource={this.state.dataSource} style={styles.listViewContainer} renderRow={this.renderRow} /> */}
    </View>
    )
  }
  getGPSDataFromServer() {
  return this.state.dataArr.map(function(news, i){
    return(
      <View key={i}>
        <Text>{i}</Text>
        <Text>{news.lat}</Text>
        <View>
          <Text>{news.long}</Text>
        </View>
      </View>
    );
  });
}

render() {
  return(
    <View>
      {this.getGPSDataFromServer()}
    </View>
  )
}}
// render() {
//     if (!this.state.loaded) {
//       return this.renderLoadingView();
//     }
//     return this.renderList();
//   }
// }

const styles = StyleSheet.create({
  listViewContainer: {
    flex: 1,
    alignSelf: 'stretch'
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
