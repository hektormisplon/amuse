import Icon from '@expo/vector-icons'
import axios from 'axios'
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import api from '../config/api'

export default class AuthActionContainer extends Component {
  state = {
    email: '',
    password: '',
    formFeedback: ''
  }

  handleSubmit = () => {
    const { email, password } = this.state
    email && password ? this.postUser() : this.formFeedback()
  }

  formFeedback = () => {
    this.setState({ formFeedback: 'Enter your email & password.' })
  }

  postUser = () => {
    const { email, password } = this.state
    axios
      .post(`http://${api}/api/v1/users/`, {
        email,
        localProvider: { password }
      })
      .then(res => {
        console.log(res)
        !res.data.errmsg
          ? console.log('Signed up')
          : console.warn('Username taken')
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.authForm}>
          <View style={styles.inputContainer}>
            <Icon.Feather name="user" size={16} color="#fff" />
            <TextInput
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => {
                this.setState({ email })
              }}
              placeholder="Email"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Icon.Feather name="lock" size={16} color="#fff" />
            <TextInput
              value={this.state.password}
              onChangeText={password => {
                this.setState({ password })
              }}
              placeholder="Password"
              secureTextEntry
              style={styles.input}
            />
          </View>
        </View>
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.btn} onPress={this.handleSubmit}>
            <Text style={styles.btnText}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.handleSubmit}>
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  authForm: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#000'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    padding: 30
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingLeft: 15,
    borderBottomWidth: 1,
    borderColor: '#fff',
    padding: 20
  },
  btn: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#111'
  },
  btnText: {
    color: '#fff'
  },
  btnGroup: {
    flex: 0.33,
    flexDirection: 'row'
  }
})
