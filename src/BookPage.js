/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

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
  pageContainer: {
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
});

export default class BookPage extends Component {
  state = {
    isLoading: false,
    error: undefined,
    html: '',
  };

  componentDidMount() {
    this.fetchBookPage();
  }

  fetchBookPage() {
    this.setState({ isLoading: true });
    fetch('https://cap_america.inkitt.de/1/stories/106766/chapters/1')
      .then(res => res.json())
      .then(res => this.setState({ html: res.response.text, isLoading: false }))
      .catch(e =>
        this.setState({
          error: e.message || 'Failed to load data',
          isLoading: false,
        }),
      );
  }

  render() {
    const { error, html, isLoading } = this.state;
    return (
      <View style={styles.container}>
        {isLoading && <ActivityIndicator />}
        {!isLoading &&
          !error && (
            <ScrollView contentContainerStyle={styles.pageContainer}>
              <HtmlRenderer html={html} />
            </ScrollView>
          )}
        {!isLoading && error && <Text>{error} :(</Text>}
      </View>
    );
  }
}
