import Icon from '@expo/vector-icons'
import React from 'react'
import { Colors } from '../styles'

const TabBarIcon = props => {
  return (
    <Icon.Feather
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  )
}

export default TabBarIcon
