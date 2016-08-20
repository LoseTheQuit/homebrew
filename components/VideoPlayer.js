'use strict';

import React, {
  Component
} from 'react';

import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

import Video from 'react-native-video';
var Button = require('react-native-button');

export default class VideoPlayer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      key: 'value',
      _handleBackButton: (event) => {
          console.log(Object.keys(event));
          this.onEnd;
         
          this.props.navigator.push({
            id: 'Cricket'
          })
      },
    }
  }

  render() {

    return (
        <View style={styles.container}>
            <Video
               source={{uri: "http://flonoware.herokuapp.com/vid/small.mp4"}}
               rate={1.0}                   // 0 is paused, 1 is normal.
               volume={1.0}                 // 0 is muted, 1 is normal.
               muted={false}                // Mutes the audio entirely.
               paused={false}               // Pauses playback entirely.
               resizeMode="cover"           // Fill the whole screen at aspect ratio.
               repeat={false}               // Repeat forever.
               onLoadStart={this.loadStart} // Callback when video starts to load
               onLoad={this.setDuration}    // Callback when video loads
               onProgress={this.setTime}    // Callback every ~250ms with currentTime
               onEnd={this.onEnd}           // Callback when playback finishes
               onError={this.videoError}    // Callback when video cannot be loaded
               style={styles.backgroundVideo} />

               <Button
                 style={ styles.backButton }
                 onPress={this.state._handleBackButton}>
                 Back
              </Button>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#effffe',
  },
  backgroundVideo: {
   position: 'absolute',
   top: 0,
   left: 0,
   bottom: 0,
   right: 0,
 }
});
