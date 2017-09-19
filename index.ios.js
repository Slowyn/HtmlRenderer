/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native';

import App from './src/App';

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

export default class HtmlRenderer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <App />
        </ScrollView>
      </View>
    );
  }
}

AppRegistry.registerComponent('HtmlRenderer', () => HtmlRenderer);
