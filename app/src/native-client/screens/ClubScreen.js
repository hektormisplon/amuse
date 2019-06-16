import React from 'react'
import { StyleSheet, Switch, View } from 'react-native'
import { Text } from '../components/StyledText'
import VerticalSplit from '../layouts/VerticalSplit'
import { Colors } from '../styles'

import Button from '../components/Button'

import TabMenu from '../components/TabMenu'

export default class ClubScreen extends React.Component {
  static navigationOptions = {
    header: null,
  }

  state = {
    page: 'first'
  }
  render() {
    return (
      <VerticalSplit
        top={
          <React.Fragment>
            <Switch style={styles.switch} />
            {/*   <Image source={require('../dist/client/static/media/logo.de89e55.svg')} /> */}
            <Text type="title">Mijn clubs</Text>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text type="subtitle" style={styles.cardText}>
                  Beeldhouwkunst {'\n'}
                  <Text>28 leden</Text>
                </Text>
                <Button title="See details" onPress={() => { this.props.navigation.navigate('ClubDetails')}}></Button>
              </View>
              <View style={styles.card}>
                <Text type="subtitle" style={styles.cardText}>
                  Schilderkunst {'\n'}
                  <Text>28 leden</Text>
                </Text>
              </View>
              <View style={styles.card}>
                <Text type="subtitle" style={styles.cardText}>
                  Moderne kunst {'\n'}
                </Text>
                  <Text>28 leden</Text>
              </View>
              {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Agenda')}>   */}
            </View>
          </React.Fragment>
        }
        bottom={
          <React.Fragment>
            <Text type="title">Opkomende evenementen</Text>
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text type="subtitle" style={styles.cardText}>
                  Evenement 1
                </Text>
              </View>
              <View style={styles.card}>
                <Text type="subtitle" style={styles.cardText}>
                  Evenement 2
                </Text>
              </View>
              <View style={styles.card}>
                <Text type="subtitle" style={styles.cardText}>
                  Evenement 3
                </Text>
              </View>
            </View>
          </React.Fragment>
        }
      />
    )
  }
}
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  card: {
    width: '30%',
    height: '30%',
    backgroundColor: Colors.primaryBrand.light,
    borderRadius: 15
  },
  switch: {
    // justifyContent: 'center',
    justifyContent: 'center',
    marginLeft: 300
  },
  cardText: {
    color: 'white',
    justifyContent: 'center'
  },
})
