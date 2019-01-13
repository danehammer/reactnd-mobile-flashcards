import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AppNavigator from './navigation/AppNavigator';
import {Constants} from 'expo';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

export default class App extends React.Component {
  store = createStore(reducer);

  render() {
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
