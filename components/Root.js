// import { Component } from 'react-native';

import React, {
    Component
} from 'react';

/*

This file and the Main.JS file  are
on the same level. Therefore ./ is good
is used to traverse the same level and
access the files in the folder.

*/

import Main from './Main';

export default class Root extends Component {
    render() {
        return (
             <Main />  
        )

    }

}
