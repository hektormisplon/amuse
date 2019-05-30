import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {} from "@expo/vector-icons/Feather";

import { Constants } from "expo";
const { manifest } = Constants;

import TourList from "../components/TourList";

const api =
  typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost
        .split(`:`)
        .shift()
        .concat(`:3000`)
    : `http://192.168.20.116:3000`;

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
