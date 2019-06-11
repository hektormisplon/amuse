import React, { Component } from 'react'
import { KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import AuthActionContainer from '../components/AuthActionContainer'
import Blob from '../components/Blob'

export default class AuthScreen extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <React.Fragment>
        <KeyboardAvoidingView
          style={styles.topContainer}
          behavior="height"
          enabled
        >
          <Blob />
          <Svg width={150.104} height={75}>
            <Path fill="none" d="M0 0h150v75H0z" />
            <Path
              d="M16.013 71.428a4.136 4.136 0 0 0 1.136 2.592h7.46c-.889-.912-1.482-2.544-1.482-5.088v-9.984c0-7.728-4.545-10.608-11.117-10.608-4.792 0-9.832 1.776-11.117 7.536l6.275 2.016c.494-1.824 1.63-3.7 4.5-3.7 3.113 0 4.051 2.016 4.051 3.648v.576a18.439 18.439 0 0 1-5.534 1.152C3.958 60.292.1 62.308.1 67.684c0 4.608 3.9 7.056 8.547 7.056a8.659 8.659 0 0 0 7.366-3.312zm-.3-5.328a6.313 6.313 0 0 1-5.336 3.264c-2.125 0-2.816-1.056-2.866-2.16-.1-1.968 1.383-2.784 3.656-3.216a24.9 24.9 0 0 0 4.55-1.248zm19.368 7.92V52.756l8.1 21.264h6.676l8.103-21.264V74.02h7.905V39.46h-9.882l-9.437 25.3-9.486-25.3h-9.881v34.56zm50.646-24.96v13.584c0 4.032-2.125 6.048-4.694 6.048-2.866 0-3.953-1.632-3.953-4.512V49.06h-7.411v15.312c0 5.952 2.223 10.368 9.338 10.368 3.063 0 5.287-1.248 7.164-4.32v3.6h6.966V49.06zm8.992 17.76c.494 4.56 4.447 7.92 10.721 7.92 6.126 0 10.672-2.688 10.672-8.208 0-5.136-3.953-6.912-6.769-7.488l-5.879-1.2c-1.285-.24-1.877-.912-1.877-1.728 0-1.68 1.68-2.256 3.706-2.256 1.828 0 3.656.672 4 2.736l6.226-1.056c-.148-3.792-3.854-7.2-9.98-7.2-5.287 0-10.178 2.256-10.178 7.968 0 4.128 2.915 6.432 6.275 7.152l6.077 1.3c1.038.24 1.976.816 1.976 1.968 0 2.016-2.075 2.5-4.1 2.5-2.767 0-4.4-1.248-4.694-3.408zm46.541-3.22c0-.1.049-1.584.049-3.072 0-8.352-5.879-12.192-12.352-12.192-6.571 0-12.747 3.984-12.747 13.2s6.126 13.2 12.747 13.2c6.176 0 9.98-2.544 11.907-7.488l-6.916-1.388a4.546 4.546 0 0 1-4.5 2.88c-3.31 0-5.632-1.68-5.83-5.136zm-12.5-9.26c2.866 0 4.842 1.728 5.04 4.368h-10.079a4.9 4.9 0 0 1 5.039-4.368zm21.34 19.68v-7.2h-7.46v7.2z"
              fill="#212e3e"
            />
          </Svg>
        </KeyboardAvoidingView>
        <View style={styles.bottomContainer}>
          <AuthActionContainer navigation={this.props.navigation} />
        </View>
      </React.Fragment>
    )
  }
}
const styles = StyleSheet.create({
  topContainer: {
    flex: 1.62,
    justifyContent: 'space-between'
  },
  bottomContainer: {
    flex: 1
  }
})
