import React from 'react';

import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Switch
} from 'react-native';

import { Dimensions} from 'react-native';


import { Feather } from '@expo/vector-icons';

import { MonoText } from '../components/StyledText';
import { Title, Text } from '../components/StyledText';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {

    return (
      <React.Fragment>
        <View style={styles.topContainer}>
          <Title style={styles.infoMessage}>Some title.</Title>
          <Text>This is the body</Text>
          <Switch/>
        </View>
        <View style={styles.bottomContainer}>
          <Title style={styles.infoMessage}>Some title.</Title>
          <Text>This is the body text</Text>
          <Switch/>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    height: Dimensions.get('window').height * .62,
    justifyContent: 'center',
  },
  bottomContainer: {
    height: Dimensions.get('window').height * .38,
    backgroundColor: '#314452',
  },
  infoMessage: {
    fontSize: 40
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
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
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
