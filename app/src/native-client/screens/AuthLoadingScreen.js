import React, { Component } from 'react'
import { ActivityIndicator, Button, StatusBar, View } from 'react-native'
import { DeviceStorage } from '../services'

import { Colors } from '../styles'


/**
 * Loading screen & authentication redirect
 */
export default class AuthLoadingScreen extends Component {

  componentDidMount() {
    this.checkUserAuthentication()
  }

  checkUserAuthentication = async () => {
    let jwtToken = await DeviceStorage.load('jwtToken')
    this.props.navigation.navigate(jwtToken ? 'Main' : 'Auth')
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.primaryBrand.light }}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Button
          title="Skip authentication check"
          onPress={() => {
            this.props.navigation.navigate('Auth')
          }}
        />
      </View>
    )
  }
}
