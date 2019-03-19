import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {getDecks} from '../storage';
import {receiveDecks} from '../actions';
import {connect} from 'react-redux';

class AddCardScreen extends Component {
  render() {
    return (
      <View>
        <Text>What you want</Text>
      </View>
    );
  }
}

export default connect()(AddCardScreen);
