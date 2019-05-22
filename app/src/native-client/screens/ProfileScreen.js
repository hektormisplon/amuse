import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, MapView } from 'expo';



export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Icon.Feather name="award" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
