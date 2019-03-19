import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import {addQuestion} from '../actions';
import {connect} from 'react-redux';
import {addCardToDeck} from '../storage';

class AddCardScreen extends React.Component {
  state = {
    questionText: '',
    answerText: ''
  };

  submit = () => {
    const {questionText, answerText} = this.state;
    if (questionText === '' || answerText === '') {
      alert('Please enter a question and an answer');
      return;
    }

    const {title} = this.props.navigation.state.params;

    this.props.dispatch(addQuestion(title, questionText, answerText));

    this.setState({
      questionText: '',
      answerText: ''
    });

    addCardToDeck(title, questionText, answerText);

    this.props.navigation.navigate('DeckView', {title});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.setState({questionText: text})}
          style={styles.textInput}
          placeholder="Question"
          value={this.state.questionText}
        />
        <TextInput
          onChangeText={(text) => this.setState({answerText: text})}
          style={styles.textInput}
          placeholder="Answer"
          value={this.state.answerText}
        />
        <TouchableOpacity onPress={this.submit} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
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
  },
  textInput: {
    width: 300,
    height: 48,
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#fff'
  }
});

export default connect()(AddCardScreen);
