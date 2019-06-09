import React from "react";
import { View, StyleSheet, FlatList, Button } from "react-native";

import Colors from "../constants/Colors";

import VerticalSplit from "../layouts/VerticalSplit";
import BadgesContainer from "../components/BadgesContainer";
import { Text } from "../components/StyledText";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile",
    header: null
  };

  render() {
    return (
      <VerticalSplit
        top={
          <React.Fragment>
            <BadgesContainer />
          </React.Fragment>
        }
        bottom={
          <React.Fragment>
            <Text type={"title"}>Hello, Jon Doe</Text>
            <Button title="Settings" onPress={() => {}} />
            {/* TODO: make button component */}
            <Button
              title="Log out"
              onPress={() => {
                // TODO: refactor
                // TODO: sign out the user
                this.props.navigation.navigate("Auth");
              }}
            />
          </React.Fragment>
        }
      />
    );
  }
}

// const styles = StyleSheet.create({
//   topContainer: {
//     flex: 0.62,
//     justifyContent: "center",
//     color: Colors.primaryBrand.light,
//     backgroundColor: Colors.primaryBrand.light
//   },
//   bottomContainer: {
//     flex: 0.38,
//     color: Colors.primaryBrand.light
//     // backgroundColor: Colors.ternaryBrand
//   }
// });
