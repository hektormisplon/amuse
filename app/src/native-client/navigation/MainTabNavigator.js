import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import TourScreen from "../screens/TourScreen";
import ClubScreen from "../screens/ClubScreen";
import ProfileScreen from "../screens/ProfileScreen";

const TourStack = createStackNavigator({
  Tour: TourScreen
});
TourStack.navigationOptions = {
  tabBarLabel: "Tours",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "map" : "map"}
    />
  )
};

const ProfileStack = createStackNavigator({
  Links: ProfileScreen
});
ProfileStack.navigationOptions = {
  tabBarLabel: "Badges",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "user" : "user"}
    />
  )
};

const ClubStack = createStackNavigator({
  Club: ClubScreen
});
ClubStack.navigationOptions = {
  tabBarLabel: "Clubs",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "users" : "users"}
    />
  )
};

export default createBottomTabNavigator(
  {
    TourStack,
    ProfileStack,
    ClubStack
  },
  {
    initialRouteName: "TourStack",
    tabBarOptions: {
      showLabel: false,
      style: {
        height: 60
      }
    }
  }
);
