import React from 'react';
import {StatusBar, StyleSheet, View, Text} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {Constants} from 'expo';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';
import {clear} from './storage';

export default class App extends React.Component {
  state = {
    ready: false
  };

  componentDidMount() {
    this.setState({ready: true});
    // uncomment this to clear AsyncStorage
    // clear().then(() => {
    //   this.setState({ready: true});
    // });
  }

  store = createStore(reducer);

  render() {
    if (!this.state.ready) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <View style={{height: Constants.statusBarHeight}}>
            <StatusBar barStyle="default" />
          </View>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
