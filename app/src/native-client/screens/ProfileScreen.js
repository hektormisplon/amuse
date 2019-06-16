import React from 'react'
import { View } from 'react-native'
import BadgesContainer from '../components/BadgesContainer'
import ProfileActionContainer from '../components/ProfileActionContainer'
import VerticalSplit from '../layouts/VerticalSplit'
import { Text } from '../components/StyledText'

/**
 * Badges view
 * User related actions
 */
export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <VerticalSplit
        top={
          <React.Fragment>
            <BadgesContainer />
          </React.Fragment>
        }
        bottom={
          <View style={{ margin: 30 }}>
            <ProfileActionContainer navigation={this.props.navigation} />
          </View>
        }
        colored="top"
        noPadding
      />
    )
  }
}
