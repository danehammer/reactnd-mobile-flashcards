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
      alert('Saved');
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(title) => this.setState({title})}
          placeholder="Deck Title"
          value={this.state.title}
        />
        <TouchableOpacity onPress={this.submit}>
          <Text>Save</Text>
        </TouchableOpacity>
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

export default connect()(NewDeckScreen);
