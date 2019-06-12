import Icon from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../components/Button'
import { Colors } from '../styles'

const ProfileActionContainer = () => {
  return (
    <View style={styles.btnGroup}>
      <Button onPress={() => {}} style={styles.btn}>
        <Icon.Feather name="settings" size={30} color={Colors.ternaryBrand} />
      </Button>
      <Button
        size={30}
        onPress={() => {
          // TODO: refactor
          // TODO: sign out the user
          this.props.navigation.navigate('Auth')
        }}
        style={styles.btn}
      >
        <Icon.Feather
          name="log-out"
          size={30}
          color={Colors.secondaryBrand.light}
        ></Icon.Feather>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  btnGroup: {
    position: 'absolute',
    right: 0,
    top: 0,
    flex: 1,
    height: 150,
    justifyContent: 'space-between',
    backgroundColor: Colors.ternaryBrand,
    borderRadius: 30
  }
})

export default ProfileActionContainer
