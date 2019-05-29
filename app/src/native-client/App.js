import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon, Constants, Location, Permissions } from 'expo';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    locationEnabled: null,
    location: null,
    errorMessage: null
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {console.log(this.state.locationEnabled)}
          <AppNavigator />
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
      ]),
      Font.loadAsync({
        ...Icon.Feather.font,
        'HKGrotesk-light': require('./assets/fonts/HKGrotesk-Light.otf'),
        'HKGrotesk-medium': require('./assets/fonts/HKGrotesk-Medium.otf'),
        'VremenaGrotesk-medium': require('./assets/fonts/VremenaGroteskMedium.otf'),
      }),
      this._checkLocationServices(),
      this.state.locationEnabled ? this._getLocationAsync() : null,
    ]);
  };

  _checkLocationServices = async () => {
    let locationEnabled = await Location.hasServicesEnabledAsync();
    locationEnabled ? this.setState({ locationEnabled: true }) : this.setState({locationEnabled: false})
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted' ) {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  _handleLoadingError = error => {
    console.warn(`App could not load: ${error}`);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
