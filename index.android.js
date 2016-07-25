/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {
    AppRegistry
} from 'react-native';

/*

This file and the components folder are
on the same level. Therefore ./ is good
is used to traverse the same level and
acces the files in the folder.

*/

import Root from './components/Root';

// The name of the file has to match the
// Function passed to the Registry
// NOTE: it's case sensitive

AppRegistry.registerComponent('homebrew', () => Root);
