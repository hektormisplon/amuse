import Icon from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Colors, Dimensions } from '../styles'

import { Text } from '../components/StyledText'

/**
 * Reusable badge copmonent
 */
const Badge = ({ ...props }) => {
  const { title, description, id, icon, amount, type } = props.data

  const showDetails = () => {
    console.log(description)
    return (
      <View
        style={{
          position: 'absolute',
          height: 400,
          width: 400,
          backgroundColor: '#fff',
        }}
      >
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    )
  }

  const getIcon = () => {
    switch (type) {
      case 'locked':
        return 'lock'
      case 'intro':
        return 'target'
      case 'mystery':
        return 'help-circle'
      case 'scan':
        return 'camera'
      default:
        return 'star'
    }
  }

  const iconName = getIcon()
  return (
    <TouchableOpacity
      style={[styles.badge, styles.unlockedBadge]}
      // onPress={showDetails}
      onPress={props.onPress}
    >
      <Icon.Feather name={iconName} size={15} color={Colors.ternaryBrand} />
      <Text
        style={{
          color: Colors.white,
          textAlign: 'center',
          alignSelf: 'center',
        }}
      >
        {amount && <Text>{amount}</Text>}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  badge: {
    margin: 5,
    width: Dimensions.window.width / 5 - 21,
    height: Dimensions.window.width / 5 - 21,
    borderRadius: Dimensions.window.width / 5 - 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockedBadge: {
    // borderColor: Colors.primaryBrand.light,
    opacity: 0.5,
    // borderWidth: 5
  },
  unlockedBadge: {
    backgroundColor: Colors.primaryBrand.light,
    shadowColor: Colors.primaryBrand.light,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5,
  },
})

export default Badge
