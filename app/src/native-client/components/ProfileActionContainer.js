import Icon from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';
import { DeviceStorage } from '../services/';
import { Colors } from '../styles';


/**
 * Buttons + functionality for the profile screen
 */
const ProfileActionContainer = props => {

  const signOut = async () => {
      await DeviceStorage.remove('jwtToken')
      props.navigation.navigate('Auth')
  }

  return (
    <View style={styles.btnGroup}>
      <Button onPress={() => {console.log('settings')}} style={styles.btn}>
        <Icon.Feather name="settings" size={30} color={Colors.ternaryBrand} />
      </Button>
      <Button
        size={30}
        onPress={signOut}
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
    backgroundColor: Colors.white,
    borderRadius: 30,
    shadowColor: Colors.primaryBrand.light,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
  }
})

export default ProfileActionContainer
