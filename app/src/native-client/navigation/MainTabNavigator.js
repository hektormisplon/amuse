import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ClubScreen from '../screens/ClubScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Tours',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'map'
          : 'map'
      }
    />
  ),
};

const ProfileStack = createStackNavigator({
  Links: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'Badges',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'user' : 'user'}
    />
  ),
};

const ClubStack = createStackNavigator({
  Club: ClubScreen,
});

ClubStack.navigationOptions = {
  tabBarLabel: 'Clubs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'users' : 'users'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  ProfileStack,
  ClubStack,
},
{
  initialRouteName: 'ProfileStack',
  tabBarOptions: {
    showLabel: false,
    style: {
      height: 60,
    },
  }
}
);
