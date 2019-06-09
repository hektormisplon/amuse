import React from "react";
import { View, StyleSheet } from "react-native";

const VerticalSplit = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top}>{props.top}</View>
      <View style={styles.bottom}>{props.bottom}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 0.62,
    justifyContent: "center"
    // color: Colors.primaryBrand.light,
    // backgroundColor: Colors.primaryBrand.light
  },
  bottom: {
    flex: 0.38
    // color: Colors.primaryBrand.light
  }
});
export default VerticalSplit;
