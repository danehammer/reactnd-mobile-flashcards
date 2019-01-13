import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading, Asset, Font, Icon} from 'expo';
import AppNavigator from './navigation/AppNavigator';
import {Constants} from 'expo';

export default class App extends React.Component {
  state = {
    // TODO
    isLoadingComplete: true
  };

  render() {
    if (!this.state.isLoadingComplete) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <View style={{height: Constants.statusBarHeight}}>
          <StatusBar barStyle="default" />
        </View>
        <AppNavigator />
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
