import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
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
import ClubNewsScreen from '../screens/ClubNewsScreen'
import ProfileScreen from '../screens/ProfileScreen'
import TourScreen from '../screens/TourScreen'
import { Colors, ScreenTransitions } from '../styles'

/**
 * Stacknavigator for Profile screens
 */
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

/**
 * Stacknavigator for Tour screens
 */
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

/**
 * Stacknavigator for Club screens
 */
const ClubStack = createBottomTabNavigator(
  {
    Club:{
      screen: ClubScreen,
      navigationOptions: {
        tabBarLabel: 'My clubs',
        gesturesEnabled: true 

      }
    },
    ClubDiscovery:{
      screen: ClubDiscoveryScreen,
      navigationOptions: {
        tabBarLabel: 'Discover',
        gesturesEnabled: true 
      },
      tabBarIcon: ({ focused }) => (
        <View style={{flex: 1}}>

          <TabBarIcon
            focused={focused}
            name={'user'}
          />
        </View>
      ),
    },
    ClubDetails: {
      screen: ClubNewsScreen,
      navigationOptions: {
        tabBarLabel: 'News',
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

/**
 * Bottom navigation for logged in users
 */
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
