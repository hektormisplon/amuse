import React from "react";
import { Platform } from "react-native";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import TourScreen from "../screens/TourScreen";
import ClubScreen from "../screens/ClubScreen";
import ProfileScreen from "../screens/ProfileScreen";

import { MainTourButton } from "../components/MainTourButton";
import { TabBar } from "../components/TabBar";

import Colors from "../constants/Colors";

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

const TourStack = createStackNavigator({
  Tour: TourScreen
});
TourStack.navigationOptions = {
  tabBarLabel: "Tours",
  tabBarIcon: ({ focused }) => (
    <View style={styles.tourTab}>
      <TabBarIcon
        focused={focused}
        name={Platform.OS === "ios" ? "map" : "map"}
      />
    </View>
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
    ProfileStack,
    // AddStack: {
    //   screen: () => null, // Empty screen
    //   navigationOptions: ({ props }) => ({
    //     tabBarIcon: <MainTourButton {...props} /> // Plus button component
    //   })
    // },
    TourStack,
    ClubStack
  },
  {
    initialRouteName: "TourStack",
    tabBarComponent: props => <TabBar {...props} />,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "#F8F8F8",
      inactiveTintColor: "#586589",
      style: {
        backgroundColor: "#171F33"
      },
      tabStyle: {}
    }
  }
);

const styles = StyleSheet.create({
  tourTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    backgroundColor: Colors.primaryBrand.light,
    borderRadius: 60
  }
});
