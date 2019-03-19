import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class QuizScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {title} = navigation.state.params;

    return {title: `${title} Quiz`};
  };

  state = {
    completed: false,
    cardNumber: 0,
    correctAnswers: 0,
    answerShown: false
  };

  flip = () => {
    this.setState({answerShown: !this.state.answerShown});
  };

  correct = () => {
    this.setState({
      correctAnswers: this.state.correctAnswers + 1
    });
    this.nextCard();
  };

  nextCard = () => {
    const {cardNumber} = this.state;
    const {deck} = this.props;

    if (cardNumber + 1 >= deck.questions.length) {
      this.setState({completed: true});
      return;
    }

    this.setState({
      answerShown: false,
      cardNumber: cardNumber + 1
    });
  };

  render() {
    const {deck} = this.props;
    const {questions} = deck;
    const {cardNumber, correctAnswers, completed, answerShown} = this.state;
    const question = questions[cardNumber];

    if (completed) {
      return (
        <View style={styles.container}>
          <Text
            style={[styles.buttonText, {fontSize: 48}]}
          >{`${(correctAnswers / questions.length) * 100}%`}</Text>
          <Text style={styles.buttonText}>
            {`You got ${correctAnswers} right out of ${questions.length}`}
          </Text>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('DeckView', {title: deck.title})
            }
            style={styles.button}
          >
            <Text style={styles.buttonText}>Back to Deck</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                completed: false,
                cardNumber: 0,
                correctAnswers: 0,
                answerShown: false
              });
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Restart Quiz</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.progress}>
          {`Card ${cardNumber + 1} of ${questions.length}`}
        </Text>
        <Text style={styles.body}>
          {answerShown ? question.answer : question.question}
        </Text>
        <TouchableOpacity
          onPress={this.flip}
          style={[styles.button, styles.flipButton]}
        >
          <Text style={styles.flipText}>Flip Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.correct}
          style={[styles.button, styles.rightButton]}
        >
          <Text style={[styles.buttonText, styles.rightButtonText]}>
            Bingo!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.nextCard}
          style={[styles.button, styles.wrongButton]}
        >
          <Text style={[styles.buttonText, styles.wrongButtonText]}>Oops</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#02b3e4'
  },
  progress: {
    color: 'whitesmoke',
    fontSize: 18,
    marginTop: 15
  },
  body: {
    color: '#fff',
    fontSize: 36,
    height: '50%',
    marginTop: 30
  },
  button: {
    width: 160,
    marginBottom: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  flipButton: {
    marginBottom: 60
  },
  flipText: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: 8
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 24,
    padding: 12
  },
  wrongButton: {},
  rightButton: {},
  wrongButtonText: {},
  rightButtonText: {}
});

function mapStateToProps(decks, {navigation}) {
  const {title} = navigation.state.params;
  return {
    deck: decks[title]
  };
}

export default connect(mapStateToProps)(QuizScreen);
