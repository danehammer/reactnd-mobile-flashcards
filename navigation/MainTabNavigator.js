import React from 'react';
import {Platform} from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import DeckListScreen from '../screens/DeckListScreen';
import NewDeckScreen from '../screens/NewDeckScreen';

const DeckListStack = createStackNavigator({
  DeckList: DeckListScreen
});

DeckListStack.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-albums' : 'md-albums'}
    />
  )
};

const NewDeckStack = createStackNavigator({
  NewDeck: NewDeckScreen
});

NewDeckStack.navigationOptions = {
  tabBarLabel: 'Add Deck',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
    />
  )
};

const Stacks = {
  DeckListStack,
  NewDeckStack
};

const Tabs =
  Platform.OS === 'ios'
    ? createBottomTabNavigator(Stacks)
    : createMaterialTopTabNavigator(Stacks);

export default Tabs;
