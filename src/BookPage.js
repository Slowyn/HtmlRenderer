/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ScrollView } from 'react-native';

import HtmlRenderer from './HtmlRenderer';

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

export default class BookPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            paddingVertical: 40,
            paddingHorizontal: 10,
          }}
        >
          <HtmlRenderer />
        </ScrollView>
      </View>
    );
  }
}
