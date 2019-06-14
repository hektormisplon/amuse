import Icon from '@expo/vector-icons'
import axios from 'axios'
import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import api from '../config/api'
import { DeviceStorage } from '../services'
import { Colors } from '../styles'

export default class AuthActionContainer extends Component {
  state = {
    email: '',
    password: '',
    formFeedback: null,
    user: '',
    loading: false,
  }

  signUp = async () => {
    const { email, password } = this.state
    return axios
      .post(`http://${api}/api/v1/users/create`, {
        email,
        localProvider: { password },
      })
      .then(res => {
        console.warn({ user: res.data })
        this.setState({ user: res.data })
        deviceStorage.save('jwtToken', res.data.token)
      })
      .catch(err => console.error(err))
  }

  signIn = () => {
    const { email, password } = this.state
    this.setState({ loading: true })
    axios
      .post(`http://${api}/api/v1/login/local`, {
        email,
        password,
      })
      .then(res => {
        if (res.status === 200) {
          DeviceStorage.save('jwtToken', res.data.token)
          this.props.navigation.navigate('Main')
        }
      })
      .catch(err => {
        const { status, data } = err.response
        status === 401
          ? this.setState({ formFeedback: data.message })
          : this.setState({
              formFeedback: 'Error, please try again later.',
            })
        this.setState({ loading: false })
      })
  }

  render() {
    const { formFeedback, loading } = this.state
    return (
      <View style={styles.authForm}>
        {formFeedback && (
          <Text style={styles.formFeedback}>{formFeedback}</Text>
        )}
        <View style={styles.input}>
          <Icon.Feather
            name="user"
            size={20}
            color="#fff"
            style={styles.inputIcon}
          />
          <TextInput
            autoCorrect={false}
            value={this.state.email}
            onChangeText={email => {
              this.setState({ email })
            }}
            placeholder="Email"
            autoFocus
          />
        </View>
        <View style={styles.input}>
          <Icon.Feather
            name="lock"
            size={20}
            color="#fff"
            style={styles.inputIcon}
          />
          <TextInput
            value={this.state.password}
            onChangeText={password => {
              this.setState({ password })
            }}
            placeholder="Password"
          />
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity
            style={[styles.btn, styles.btnSignin]}
            onPress={this.signIn}
          >
            <Text style={styles.btnText}>Sign in</Text>
            {loading && (
              <ActivityIndicator
                style={styles.spinner}
                size="large"
                color={Colors.white}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnSignup]}
            onPress={this.handleSubmit}
          >
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  authForm: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 30,
  },
  formFeedback: {
    marginLeft: 15,
    height: 30,
    color: Colors.ternaryBrand,
  },
  input: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    marginRight: 15,
    marginLeft: 15,
  },
  btnGroup: {
    height: 60,
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btnSignin: {
    backgroundColor: Colors.primaryBrand.dark,
    flex: 1.62,
    borderRadius: 45,
  },
  btnText: {
    color: Colors.white,
  },
})
