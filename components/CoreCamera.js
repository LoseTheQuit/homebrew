'use strict';
import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Camera from 'react-native-camera';

export default class CoreCamera extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recordToll: 0,
      _handleBackButton: (event) => {
        console.log(Object.keys(event));

        try {
          this.camera.stopCapture()
        } catch (e) {
          console.log(e)
          console.log(e)
          console.log(e)
          alert(e)
        }

      },
      buttonStyleChange: () => {

        console.log('buttonStyleChange IS ON')

      },
      recordOnWake: (x) => {
        alert('THIS IS ON')
      // if (x === 1) {
      //   //  this.camera.capture()
      //   //  .then((data) => console.log(data))
      //   //.catch(err => console.error(err));
      // } else {
      //   //  this.camera.stopCapture()
      //   this.props.navigator.push({
      //     id: 'Main'
      //   })
      // }
      },
      componentWillUnmount: function() {
        navigator.geolocation.clearWatch(this.watchID);
      },

      componentDidMount: () => {
        this.resetCAM();
        alert('CAM - on -  RESET')
      }
    }
  }

  //  this.takePicture(1)

  render() {
    return (
      <View style={styles.container}>
                <Camera ref={(cam) => {
        this.camera = cam;
        try {
          if (this.camera != null) {
          }
        } catch (e) {
          console.log(e);
          alert(e)
        }
      }} captureAudio={true} playSoundOnCapture={true} aspect={Camera.constants.Aspect.fill} captureMode={Camera.constants.CaptureMode.video}>

                    <View style={styles.buttonContainer}>

                        <TouchableHighlight style={styles.capture} ref={this.takePictureTimed.bind(this)} onPress={this.takePicture.bind(this, 1)}>
                            <Text style={styles.buttonText}>[withBIND]</Text>
                        </TouchableHighlight>

                        <TouchableHighlight style={styles.capture} onPress={this.takePicture.bind(this, 100)}>
                            <Text style={styles.buttonText}>[BACK]</Text>
                        </TouchableHighlight>

                    </View>
                </Camera>
            </View>
    )
  }

  takePictureTimed() {
    if (this.state.recordToll === 0)
      setTimeout(() => {
        this.camera.stopCapture()
        this.camera.capture().then((data) => {
          console.log('cam data: ')
          console.log(data)
        }).catch(err => console.error(err));
        this.state.recordToll++;
      }, 250)
  }

  takePicture(x) {
    this.camera.stopCapture()
    if (x === 1) {
      this.camera.capture().then((data) => console.log(data)).catch(err => console.error(err));
    } else {
      this.camera.stopCapture()
      this.props.navigator.push({
        id: 'Main'
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: "#000"
  },
  preview: {
    flex: 9,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: "#000"
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    // backgroundColor: '#000',
    borderRadius: 5,
    // color: '#000',
    padding: 10,
    margin: 40
  },
  buttonContainer: {
    flex: 0,
    flexDirection: "row",
    padding: 0,
    backgroundColor: '#000',
    // justifyContent: 'flex-start',
    // alignItems: 'flex-start',
    // flexWrap: "nowrap",
    justifyContent: 'space-between'
  }
});
