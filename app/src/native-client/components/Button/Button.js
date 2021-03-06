import { Icon } from 'expo'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from '../../styles'

import { Text } from '../../components/StyledText'

/**
 * Reusable button component
 */
export const Button = props => {
  const { title, style, size, children, icon, iconColor } = props
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={props.onPress}>
      {children}
      {title && <Text >{title}</Text>}
      {icon && <Icon.Feather name={icon} size={30} color={iconColor} />}
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
