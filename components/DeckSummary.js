import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class DeckSummary extends Component {
  render() {
    const {title, questions} = this.props.deck;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{questions.length} cards</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  title: {
    fontSize: 24,
    color: '#fff'
  },
  subtitle: {
    fontSize: 18,
    color: '#fff'
  }
});

export default DeckSummary;
