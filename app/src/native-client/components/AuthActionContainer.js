import Icon from '@expo/vector-icons';
import axios from 'axios';
import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AuthFormInput from '../components/AuthFormInput';
import api from '../config/api';
import { DeviceStorage } from '../services';
import { Colors } from '../styles';


export default class AuthActionContainer extends Component {
  state = {
    email: '',
    password: '',
    passwordConfirm: '',
    formFeedback: null,
    user: '',
    loading: false,
    showPasswordConfirm: false,
  }

  signUp = async () => {
    const { email, password } = this.state
    email && password ?     this.setState({showPasswordConfirm: true}) : this.setState({ formFeedback: 'To register enter your email & password'})
    // return axios
    //   .post(`http://${api}/api/v1/users/create`, {
    //     email,
    //     localProvider: { password },
    //   })
    //   .then(res => {
    //     console.warn({ user: res.data })
    //     this.setState({ user: res.data })
    //     deviceStorage.save('jwtToken', res.data.token)
    //   })
    //   .catch(err => console.error(err))
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
    const { formFeedback, loading, email, password, showPasswordConfirm, passwordConfirm } = this.state
    return (
      <View style={styles.authForm}>
        {formFeedback && (
          <Text style={styles.formFeedback}>{formFeedback}</Text>
        )}
        {!showPasswordConfirm ? (
          <React.Fragment>
        <AuthFormInput
          placeholder="Email"
          value={email}
          icon="user"
          onChangeText={email => {
            this.setState({ email })
          }}
          autoFocus
        />
        <AuthFormInput
          placeholder="Password"
          value={password}
          icon="lock"
          onChangeText={password => {
            this.setState({ password })
          }}
        />
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
            onPress={this.signUp}
          >
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>
        </View>
          </React.Fragment>
        ) : (
          <React.Fragment>

          <Text>Please confirm your password below</Text>
          <AuthFormInput
          placeholder="Confirm your password"
          value={passwordConfirm}
          icon="lock"
          onChangeText={passwordConfirm => {
            this.setState({ passwordConfirm })
          }}
          />
          <View style={styles.btnGroup}>

          <TouchableOpacity
            style={[styles.btn, styles.btnSignup]}
            onPress={this.signUp}
          >
          <Icon.Feather name="check" size={30} color={Colors.white}></Icon.Feather>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, styles.btnSignup]}
            onPress={() => this.setState({showPasswordConfirm: false})}
          >
          <Icon.Feather name="x" size={30} color={Colors.white}></Icon.Feather>
          </TouchableOpacity>
          </View>
          </React.Fragment>
        )}
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
