import { MapView } from 'expo';
import React from 'react';
import { Dimensions, StyleSheet, Switch, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Text, Title } from '../components/StyledText';
import Colors from '../constants/Colors';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.topContainer}>
        <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          <MapView.Marker
            coordinate={{latitude: 37.73538,
                longitude: -122.4324,}}
            title={"marker.title"}
            description={"desss"}
          />
        </MapView>
        </View>
        <View style={styles.bottomContainer}>
          <Title>Some title.</Title>
          <Text>This is the body text</Text>
          <Switch/>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    height: Dimensions.get('window').height * .62,
    justifyContent: 'center',
    color: Colors.primaryBrand.light
  },
  bottomContainer: {
    height: Dimensions.get('window').height * .38,
    color: Colors.primaryBrand.dark,
    backgroundColor: Colors.primaryBrand.light,
  },
});
