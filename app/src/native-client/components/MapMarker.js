import { Icon } from 'expo'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../styles'


/**
 * Marker for displaying current user location
 */
export const UserMarker = () => {
  return (
    <View style={styles.userMarker}>
      <Icon.Feather name="user" size={20} color={Colors.white} />
    </View>
  )
}


/**
 * Marker for museua
 */
export const MuseumMarker = () => {
  return (
    <Icon.Feather name="circle" size={20} color={Colors.primaryBrand.light} />
  )
}

const styles = StyleSheet.create({
  userMarker: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    backgroundColor: Colors.primaryBrand.light,
    borderRadius: 30
  }
})
