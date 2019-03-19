import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {getDecks} from '../storage';
import {receiveDecks} from '../actions';
import {connect} from 'react-redux';
import DeckSummary from '../components/DeckSummary';

class DeckViewScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {title} = navigation.state.params;

    return {title};
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

  addCard = () => {
    this.props.navigation.navigate('AddCard');
  };

  startQuiz = () => {};

  render() {
    const {title} = this.props;

    return (
      <View style={styles.container}>
        <DeckSummary title={title} />
        <TouchableOpacity onPress={this.addCard} style={styles.button}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.startQuiz} style={styles.button}>
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

function mapStateToProps(state, {navigation}) {
  return {
    title: navigation.state.params.title
  };
}

export default connect(mapStateToProps)(DeckViewScreen);
