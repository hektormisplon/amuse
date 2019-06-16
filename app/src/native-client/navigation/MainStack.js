import React from 'react'
import { Platform, StyleSheet, View,Text } from 'react-native'
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator,
} from 'react-navigation'
import { TabBar } from '../components/TabBar'
import { TabMenu } from '../components/TabMenu'

import TabBarIcon from '../components/TabBarIcon'
import ClubScreen from '../screens/ClubScreen'
import ClubDiscoveryScreen from '../screens/ClubDiscoveryScreen'
import ClubDetailScreen from '../screens/ClubDetailScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TourScreen from '../screens/TourScreen'
import { Colors, ScreenTransitions } from '../styles'

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
})
ProfileStack.navigationOptions = {
  tabBarLabel: 'Badges',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'user' : 'user'}
    />
  ),
}

const TourStack = createStackNavigator({
  Tour: TourScreen,
})
TourStack.navigationOptions = {
  header: null,
  tabBarLabel: 'Tours',
  tabBarIcon: ({ focused }) => (
    <View style={styles.tourTab}>
      <TabBarIcon
        focused={focused}
        name={Platform.OS === 'ios' ? 'map' : 'map'}
      />
    </View>
  ),
}

const ClubStack = createBottomTabNavigator(
  {
    Club:{
      screen: ClubScreen,
      navigationOptions: {
        tabBarLabel: 'Overview',
        gesturesEnabled: true 

      }
    },
    ClubDiscovery:{
      screen: ClubDiscoveryScreen,
      navigationOptions: {
        tabBarLabel: 'Discover',
        gesturesEnabled: true 

      }
    },
    ClubDetails: {
      screen: ClubDetailScreen,
      navigationOptions: {
        tabBarLabel: 'Details',
    gesturesEnabled: true 
      }
    },
  },
  {
      initialRouteName: 'Club',
      tabBarComponent: props => {
        return <TabMenu {...props} />
      }
  },
)

ClubStack.navigationOptions = {
  tabBarLabel: 'Clubs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'users' : 'users'}
    />
  ),
}

export default createBottomTabNavigator(
  {
    ProfileStack,
    // AddStack: {
    //   screen: () => null, // Empty screen
    //   navigationOptions: ({ props }) => ({
    //     tabBarIcon: <MainTourButton {...props} /> // Plus button component
    //   })
    // },
    TourStack,
    ClubStack,
  },
  {
    // initialRouteName: 'TourStack',
    initialRouteName: 'ProfileStack',
    // TODO: redux tabbar color
    tabBarComponent: props => {
      return <TabBar {...props} />
    },
  },
)

const styles = StyleSheet.create({
  tourTab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 90,
    backgroundColor: Colors.primaryBrand.light,
    borderRadius: 60,
  },
})
