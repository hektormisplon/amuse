import React from 'react'
import { Text, View } from 'react-native'
import BadgesContainer from '../components/BadgesContainer'
import ProfileActionContainer from '../components/ProfileActionContainer'
import VerticalSplit from '../layouts/VerticalSplit'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
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
            <Text type={'title'}>Hello, Jon Doe</Text>
            <ProfileActionContainer />
          </View>
        }
        colored="top"
        noPadding
      />
    )
  }
}
