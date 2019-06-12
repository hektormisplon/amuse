import Icon from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Dimensions } from '../styles'

const Badge = ({ ...badge }) => {
  const { title, id, icon, amount, locked } = badge
  if (!locked) {
    return (
      <TouchableOpacity style={[styles.badge, styles.unlockedBadge]}>
        <Icon.Feather
          name={icon ? icon : 'star'}
          size={15}
          color={Colors.ternaryBrand}
        />
        <Text
          style={{
            color: Colors.white,
            textAlign: 'center',
            alignSelf: 'center'
          }}
        >
          {amount && <Text>{amount}</Text>}
        </Text>
      </TouchableOpacity>
    )
  } else {
    return (
      <View style={[styles.badge, styles.lockedBadge]}>
        <Icon.Feather
          name={'lock'}
          size={15}
          color={Colors.secondaryBrand.light}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  badge: {
    margin: 5,
    width: Dimensions.window.width / 5 - 21,
    height: Dimensions.window.width / 5 - 21,
    borderRadius: Dimensions.window.width / 5 - 15
  },
  lockedBadge: {
    // borderColor: Colors.primaryBrand.light,
    opacity: 0.5
    // borderWidth: 5
  },
  unlockedBadge: {
    backgroundColor: Colors.primaryBrand.light,
    shadowColor: Colors.primaryBrand.light,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5
  }
})

export default Badge
