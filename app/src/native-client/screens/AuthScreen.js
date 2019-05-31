import React, { Component } from "react";
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button
} from "react-native";

export default class AuthScreen extends Component {
  render() {
    return (
      <View>
        <Text>Welcome</Text>
        <Button
          title="Sign In"
          onPress={() => {
            this.props.navigation.navigate("Main");
          }}
        />
      </View>
    );
  }
}
