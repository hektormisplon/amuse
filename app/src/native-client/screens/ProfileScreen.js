import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {} from "@expo/vector-icons/Feather";

import { Constants } from "expo";
const { manifest } = Constants;

import TourList from "../components/TourList";

import axios from "axios";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile",
    header: null
  };

  render() {
    return <TourList />;
  }
}
