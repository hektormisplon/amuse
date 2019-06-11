import React, { Component } from "react";
import { ActivityIndicator, Button, StatusBar, View } from "react-native";

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    // sample code
    // const userToken = await AsyncStorage.getItem("userToken");

    // TODO: server authentication request
    const userToken = null;

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? "App" : "Auth");
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Button
          title="Skip authentication check"
          onPress={() => {
            this.props.navigation.navigate("Main");
          }}
        />
        </View>
    );
  }
}
