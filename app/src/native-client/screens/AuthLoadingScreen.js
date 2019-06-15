import React, { Component } from 'react'
import { ActivityIndicator, Button, StatusBar, View } from 'react-native'
import { DeviceStorage } from '../services'

export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  _bootstrapAsync = async () => {
    const jwtToken = DeviceStorage.load('jwtToken')
    this.props.navigation.navigate(jwtToken ? 'Main' : 'Auth')
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Button
          title="Skip authentication check"
          onPress={() => {
            this.props.navigation.navigate('Main')
          }}
        />
      </View>
    )
  }
}
