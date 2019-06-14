import Icon from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const AuthFormInput = ({...props }) => {

  const { icon, autoCorrect, value, onChangeText, placeholder, autoFocus} = props
  return (
      <View style={styles.input}>
      <Icon.Feather
        name={props.icon}
        size={20}
        color="#fff"
        style={styles.inputIcon}
      />
      <TextInput
        autoCorrect={autoCorrect}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder ? placeholder : null}
        autoFocus={autoFocus}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    marginRight: 15,
    marginLeft: 15,
  },
})

export default AuthFormInput
