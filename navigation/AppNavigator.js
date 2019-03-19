import React from 'react';
import {Platform} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import DeckListScreen from '../screens/DeckListScreen';
import NewDeckScreen from '../screens/NewDeckScreen';
import DeckViewScreen from '../screens/DeckViewScreen';
import AddCardScreen from '../screens/AddCardScreen';
import QuizScreen from '../screens/QuizScreen';

const Tabs = {
  DeckList: {
    screen: DeckListScreen,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({focused}) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-albums' : 'md-albums'}
        />
      )
    }
  },
  NewDeck: {
    screen: NewDeckScreen,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({focused}) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
        />
      )
    }
  }
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {}
};

const TabNavigator =
  Platform.OS === 'ios'
    ? createBottomTabNavigator(Tabs, TabNavigatorConfig)
    : createMaterialTopTabNavigator(Tabs, TabNavigatorConfig);

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator
    // no title
  },
  DeckView: {
    screen: DeckViewScreen
    // title dynamic
  },
  AddCard: {
    screen: AddCardScreen,
    navigationOptions: {
      title: 'Add Card'
    }
  },
  Quiz: {
    screen: QuizScreen
    // title dynamic
  }
});

export default createAppContainer(MainNavigator);
