/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 use react native to make a martial story game
 */

import React, { Component } from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var HomeView=require('./HomeView');
var ProView=require('./ProView');
var RecView=require('./RecView');

class cnmartial extends Component {
  render() {
    return (
      <ScrollableTabView tabBarPosition="bottom">
         <HomeView tabLabel="开端" />
         <ProView tabLabel="历程" />
         <RecView tabLabel="成就" />
       </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('cnmartial', () => cnmartial);
