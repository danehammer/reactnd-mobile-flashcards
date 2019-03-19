import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import DeckSummary from '../components/DeckSummary';
import {connect} from 'react-redux';

class DeckViewScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {title} = navigation.state.params;

    return {title};
  };

  render() {
    const {deck} = this.props;

    return (
      <View style={styles.container}>
        <DeckSummary deck={deck} />
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('AddCard', {title: deck.title})
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('StartQuiz', {title: deck.title})
          }
          style={styles.button}
        >
          <Text style={styles.buttonText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#02b3e4'
  },
  button: {
    width: 160,
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    padding: 12
  }
});

function mapStateToProps(decks, {navigation}) {
  const {title} = navigation.state.params;
  return {
    deck: decks[title]
  };
}

export default connect(mapStateToProps)(DeckViewScreen);
