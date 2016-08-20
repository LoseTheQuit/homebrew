 import React, {
    Component,
    PropTypes
} from 'react';

import { Navigator, Text, TouchableHighlight, View } from 'react-native';

/*

This file and the Main.JS file  are
on the same level. Therefore ./ is good
is used to traverse the same level and
access the files in the folder.

*/

import Main from './Main';
import Rugby from './Rugby';
import Cricket from './Cricket';
import MyScene from './MyScene';
import VideoPlayer from './VideoPlayer';

// import BadInstagramCloneApp from './coreCamera'
export default class Root extends Component {

  render() {

        return (


          <Navigator
            initialRoute={{
              // title: 'homebrew',
              id: 'Cricket',
              index: 0
            }}

            renderScene = {
             this.navigatorRenderScene
              }

        />
)}

  navigatorRenderScene(route, navigator){
      
      _navigator = navigator;
                switch (route.id) {
        case  'Cricket':
          return(<Cricket navigator={navigator} title="Cricket"/>)
        case  'Main':
          return(<Main navigator={navigator} title="Main"/>)
        case  'Rugby':
          return(<Rugby navigator={navigator} title="Rugby"/>)
        case  'VideoPlayer':
          return(<VideoPlayer navigator={navigator} title="VideoPlayer"/>)
        default:

      }
  }


}





//
//



    //
    //

    // <Cricket
    //   title={route.title}
    //
    // // Function to call when a new scene should be displayed
    //   onForward={ () => {
    //     const nextIndex = route.index + 1;
    //     navigator.push({
    //       title: 'Scene ' + nextIndex,
    //       index: nextIndex,
    //     });
    //   }}
    //   configureScene={(route, routeStack) =>
    //   Navigator.SceneConfigs.FloatFromBottom}
    //   // Function to call to go back to the previous scene
    //   onBack={() => {
    //     if (route.index > 0) {
    //       navigator.pop();
    //     }
    //   }}
    // />

    //
    //

//
//

            /*  <Main/>
            /* <BadInstagramCloneApp /> */











/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////
/////////////////////////////////////////////////



//
//
//           <Navigator
//             initialRoute={routes[0]}
//             initialRouteStack={routes}
//             renderScene={(route, navigator) =>
//
//               <TouchableHighlight onPress={() => {
//                 if (route.index === 0) {
//                   navigator.push(routes[1]);
//                 } else {
//                   navigator.pop();
//                 }
//               }}>
//
//               <Text>Hello {route.title}!</Text>
//               </TouchableHighlight>
//             }
//             navigationBar={
//    <Navigator.NavigationBar
//      routeMapper={{
//        LeftButton: (route, navigator, index, navState) =>
//         { return (<Text>Cancel</Text>); },
//        RightButton: (route, navigator, index, navState) =>
//          { return (<Text>Done</Text>); },
//        Title: (route, navigator, index, navState) =>
//          { return (<Text>Awesome Nav Bar</Text>); },
//      }}
//      //style={{backgroundColor: 'gray'}}
//    />
// }  configureScene={(route, routeStack) =>
//     Navigator.SceneConfigs.FloatFromBottom}
//             style={{padding: 10, paddingTop: 100}}
//           />

    //       <Navigator
    //    initialRoute={{ title: 'Awesome Scene', index: 0 }}
    //    renderScene={(route, navigator) =>
    //      <Main/>
    //    }
    //    style={{padding: 10}}
    //  />
