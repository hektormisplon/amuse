import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from '../components/StyledText'


/**
 * Screen to render new clubs for user to join
 */
class ClubDiscoveryScreen extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text> Club discovery </Text>
            </View>
        )
    }
}

export default ClubDiscoveryScreen
