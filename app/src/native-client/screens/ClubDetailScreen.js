import React from 'react'

import { View, Text } from 'react-native'
import Button from '../components/Button'

class ClubDetailScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        return( 
            <View style={{flex:  1}}>
                <Text>Club detail screen</Text>
                <Button title="Go back" onPress={() => {navigation.navigate('Club')}}/>
            </View>
        )
    }
}

export default ClubDetailScreen