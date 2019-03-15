import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getDecks} from '../storage';
import {receiveDecks} from '../actions';
import {connect} from 'react-redux';
import {AppLoading} from 'expo';
import DeckSummary from '../components/DeckSummary';

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

    const deckTitles = Object.keys(this.props.decks);
    return (
      <View style={styles.container}>
        {deckTitles.map((title) => (
          <DeckSummary key={title} title={title} />
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

function mapStateToProps(decks) {
  return {decks};
}

export default connect(mapStateToProps)(DeckListScreen);
