import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import Colors from '../../constants/Colors'

export const Button = props => {
  return (
    <TouchableOpacity style={[styles.btn, props.style]} onPress={props.onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    shadowColor: Colors.primaryBrand.light,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5
  }
})