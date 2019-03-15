import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';

class DeckSummary extends React.Component {
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
    justifyContent: 'center'
  },
  title: {
    fontSize: 20
  },
  subtitle: {
    fontSize: 16,
    color: 'gray'
  }
});

function mapStateToProps(decks, {title}) {
  return {
    deck: decks[title]
  };
}

export default connect(mapStateToProps)(DeckSummary);
