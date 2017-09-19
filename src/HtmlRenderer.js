import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import data from './parseHtml/temp';
import parseHtml from './parseHtml';

const defaultStylesForTags = StyleSheet.create({
  p: {
    fontSize: 16,
    color: '#444',
  },
  b: {
    fontWeight: 'bold',
  },
  i: {
    fontStyle: 'italic',
  },
});

export default class HtmlRenderer extends Component {
  static propTypes = {
    iStyles: Text.propTypes.style,
    bStyles: Text.propTypes.style,
    pStyles: Text.propTypes.style,
    html: PropTypes.string.isRequired,
  };
  static defaultProps = {
    iStyles: defaultStylesForTags.i,
    bStyles: defaultStylesForTags.b,
    pStyles: defaultStylesForTags.p,
  };
  renderDomToRNViews(dom, key = 'initial') {
    const { iStyles, bStyles, pStyles } = this.props;
    const styles = {
      i: iStyles,
      b: bStyles,
      p: pStyles,
    };
    return dom.reduce((acc, node, i) => {
      if (node.type === 'text') {
        const str = node.data;
        if (!str.length) return acc;
        acc.push(<Text key={`${key}${i}`}>{str}</Text>);
        return acc;
      }

      if (node.type === 'tag') {
        if (node.name === 'br') {
          acc.push(<Text key={`${key}${i}`}>{'\n'}</Text>);
        }
        if (node.name === 'p') {
          // let's use goofy indentation implementation
          acc.push(
            <Text style={styles.p} key={`${key}${i}`}>
              {'       '}
              {this.renderDomToRNViews(node.children, i)}
            </Text>,
          );
        }
        if (node.name === 'b' || node.name === 'i') {
          acc.push(
            <Text key={`${key}${i}`} style={styles[node.name]}>
              {this.renderDomToRNViews(node.children)}
            </Text>,
          );
        }
      }
      return acc;
    }, []);
  }

  render() {
    const dom = parseHtml(this.props.html);
    const views = this.renderDomToRNViews(dom);
    return <View style={{ flex: 1 }}>{views}</View>;
  }
}
