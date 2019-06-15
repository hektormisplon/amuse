import Icon from '@expo/vector-icons'
import { AppLoading, Asset, Font } from 'expo'
import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import AppNavigator from './navigation/AppNavigator'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          <AppNavigator />
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        </View>
      )
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([]),
      Font.loadAsync({
        ...Icon.Feather.font,
        'HKGrotesk-light': require('./assets/fonts/HKGrotesk-Light.otf'),
        'HKGrotesk-medium': require('./assets/fonts/HKGrotesk-Medium.otf'),
        'VremenaGrotesk-medium': require('./assets/fonts/VremenaGroteskMedium.otf')
      })
    ])
  }

  _handleLoadingError = error => {
    console.warn(`App could not load: ${error}`)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
