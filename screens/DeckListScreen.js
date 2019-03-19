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

    if (deckTitles.length === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>You do not have any decks created.</Text>
        </View>
      );
    }

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
  text: {
    fontSize: 36,
    width: '100%',
    height: '100%',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 200
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
