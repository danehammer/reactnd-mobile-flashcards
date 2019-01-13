import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import {getDecks} from '../storage';

export default class DeckListScreen extends React.Component {
  state = {
    decks: {}
  };

  componentDidMount() {
    getDecks().then((decks) => {
      this.setState({decks});
    });
  }

  render() {
    const deckTitles = Object.keys(this.state.decks);
    return (
      <View style={styles.container}>
        <View style={{height: 100}} />
        <Text>DeckListScreen</Text>
        {deckTitles.map((deckTitle) => (
          <Text key={deckTitle}>{deckTitle}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
