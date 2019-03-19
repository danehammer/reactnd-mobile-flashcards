import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {getDecks} from '../storage';
import {receiveDecks} from '../actions';
import {connect} from 'react-redux';
import {AppLoading} from 'expo';
import DeckSummary from '../components/DeckSummary';
import {TouchableOpacity} from 'react-native';

class DeckListScreen extends React.Component {
  state = {
    ready: false
  };

  componentDidMount() {
    getDecks()
      .then((decks) => {
        this.props.dispatch(receiveDecks(decks));
      })
      .then(() => {
        this.setState({ready: true});
      });
  }

  render() {
    if (!this.state.ready) {
      return <AppLoading />;
    }

    const {decks} = this.props;
    const deckTitles = Object.keys(decks);
    return (
      <ScrollView style={styles.container}>
        {deckTitles.map((title) => (
          <TouchableOpacity
            key={`touch-${title}`}
            onPress={() => this.props.navigation.navigate('DeckView', {title})}
            style={styles.deck}
          >
            <DeckSummary key={title} deck={decks[title]} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  deck: {
    height: 200,
    margin: 20,
    textAlign: 'center',
    backgroundColor: '#02b3e4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  }
});

function mapStateToProps(decks) {
  return {decks};
}

export default connect(mapStateToProps)(DeckListScreen);
