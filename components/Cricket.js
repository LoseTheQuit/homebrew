/* eslint no-console: 0 */
'use strict';

import React, {
  Component,
  PropTypes
} from 'react';

import {
  ListView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
TouchableHighlight
} from 'react-native';

import TimerMixin from 'react-timer-mixin';
import clrs from '../utils/clrs';
import {fetcher} from '../utils/fetcher';
import VideoRecorder from 'react-native-video-recorder';
var Button = require('react-native-button');

export default class Cricket extends Component{
  static propTypes = {
    title: PropTypes.string.isRequired,
    // onForward: PropTypes.func.isRequired,
    // onBack: PropTypes.func.isRequired,
  }

      constructor(props) {
            super(props);

                this.state = {

                  text: '',
                  longitudeTransfer: 0,
                  latitudeTransfer: 0,

                    _buttonPress: (event) => {
                           this.props.navigator.push({
                             id: 'Main'

                           })
                   },

            }
      }

          render(){

                  return(

                      <View style={styles.container}>

                         <Text style={styles.largeText}>homebrew</Text>
                         <Text style={styles.largeText}>GPS</Text>
                         <Text style={styles.largeText}>v0.0.009</Text>

                         <TouchableHighlight style={styles.button} onPress={this.state._buttonPress}>
                          <Text style={styles.buttonText}>Enter</Text>
                         </TouchableHighlight>

                      </View>



                  )


          }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#00a3e0"
  },
    largeText:{
    flex: 1,
    fontSize: 50,
    fontFamily: "Georgia",
    justifyContent: 'center',
    alignItems: 'center',
    color: '#c7c7c7',
  },
  button:{
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: "#006b94"
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    fontFamily: "Georgia",
    //  backgroundColor: "#ff4334"
  }


});
