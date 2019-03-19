import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {saveDeckTitle} from '../storage';
import {connect} from 'react-redux';
import {addDeck} from '../actions';

class NewDeckScreen extends React.Component {
  state = {
    title: ''
  };

  submit = () => {
    const {title} = this.state;
    if (title === '') {
      return;
    }

    this.setState({title: ''});
    this.props.dispatch(addDeck(title));
    saveDeckTitle(title).then(() => {
      this.props.navigation.navigate('DeckView', {title});
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(title) => this.setState({title})}
          style={styles.titleInput}
          placeholder="Deck Title"
          value={this.state.title}
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
  titleInput: {
    width: 300,
    height: 48,
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    backgroundColor: '#fff'
  }
});

export default connect()(NewDeckScreen);
