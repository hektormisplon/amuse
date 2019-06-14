import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Colors } from '../../styles'

export const Button = props => {
  const { title, style, size, children } = props
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={props.onPress}>
      {children}
      {title && <Text>{title}</Text>}
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
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  },
})
