import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import data from './parseHtml/temp';
import parseHtml from './parseHtml';

const allowedTags = ['p', 'b', 'i'];

const defaultStylesForTags = StyleSheet.create({
  p: {},
  b: {
    fontWeight: 'bold',
  },
  i: {
    fontStyle: 'italic',
  },
});

export default class BookPage extends Component {
  renderDomToRNViews(dom, key = 'initial') {
    return dom.reduce((acc, node, i) => {
      if (node.type === 'text') {
        const str = node.data;
        if (!str.length) return acc;
        acc.push(<Text key={`${key}${i}`}>{str}</Text>);
        return acc;
      }

      if (node.type === 'tag') {
        if (node.name === 'p') {
          acc.push(
            <View key={`${key}${i}`}>
              {this.renderDomToRNViews(node.children, i)}
            </View>,
          );
        }
        if (node.name === 'b' || node.name === 'i') {
          acc.push(
            <Text key={`${key}${i}`} style={defaultStylesForTags[node.name]}>
              {this.renderDomToRNViews(node.children)}
            </Text>,
          );
        }
      }
      return acc;
    }, []);
  }

  render() {
    const dom = parseHtml(data.response.text);
    const views = this.renderDomToRNViews(dom);
    return <View style={{ flex: 1 }}>{views}</View>;
  }
}
