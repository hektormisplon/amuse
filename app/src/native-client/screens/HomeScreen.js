import React from 'react';

import {
  Platform,
  StyleSheet,
  View,
  Switch
} from 'react-native';

import { MapView } from 'expo'

import {SafeAreaView} from 'react-navigation'

import { Dimensions} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { Title, Text } from '../components/StyledText';


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
          <Title style={styles.infoMessage}>Some title.</Title>
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
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  }
});
