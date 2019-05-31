import React from "react";
import { View, StyleSheet, Text, FlatList, Dimensions } from "react-native";

import { Icon } from "expo";

import Colors from "../constants/Colors";

const data = [
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" },
  { title: "Badge" }
  // { key: 'Badge' },
  // { key: 'Badge' },
];

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile",
    header: null
  };

  renderBadges = (badge, index) => {
    return (
      <View key={index} style={styles.badge}>
        <Text>{badge.title}</Text>
      </View>
    );
  };

  formatData = (data, numCol) => {
    let numElIncompleteRow = data.length % numCol;
    while (numElIncompleteRow !== numCol && numElIncompleteRow !== 0) {
      data.push({ key: `blank-${numElIncompleteRow}`, empty: true });
      numElIncompleteRow++;
    }
    return data;
  };

  render() {
    return (
      <React.Fragment>
        {/* <View style={styles.topContainer} /> */}
        <View style={styles.bottomContainer}>
          <Icon.Feather name="award" size={30} />
          <FlatList
            data={this.formatData(data, 5)}
            renderItem={this.renderBadges}
            numColumns={5}
            style={styles.badgeContainer}
          />
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  // topContainer: {
  //   flex: 0.38,
  //   justifyContent: "center",
  //   color: Colors.primaryBrand.light
  // },
  bottomContainer: {
    flex: 1,
    color: Colors.primaryBrand.light
    // backgroundColor: Colors.ternaryBrand
  },
  badgeContainer: {
    display: "flex",
    margin: 30
  },
  badge: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primaryBrand.light,
    margin: 15,
    height: Dimensions.get("window").width / 5 - 42,
    borderRadius: Dimensions.get("window").width / 5 - 42
  }
});
