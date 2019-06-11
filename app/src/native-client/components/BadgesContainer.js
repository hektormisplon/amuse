import Icon from '@expo/vector-icons'
import React, { Component } from 'react'
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import Colors from '../constants/Colors'

const data = [
  { title: 'Badge', id: '01' },
  { title: 'Badge', id: '02' },
  { title: 'Badge', id: '04' },
  { title: 'Badge', id: '05' },
  { title: 'Badge', id: '06' },
  { title: 'Badge', id: '07' },
  { title: 'Badge', id: '08' },
  { title: 'Badge', id: '09' },
  { title: 'Badge', id: '10' },
  { title: 'Badge', id: '11' },
  { title: 'Badge', id: '12' },
  { title: 'Badge', id: '14' },
  { title: 'Badge', id: '15' },
  { title: 'Badge', id: '16' },
  { title: 'Badge', id: '17' },
  { title: 'Badge', id: '18' },
  { title: 'Badge', id: '19' },
  { title: 'Badge', id: '20' }
]

const width = Dimensions.get('window').width

export default class BadgesContainer extends Component {
  renderBadges = (badge, index) => {
    return (
      <View key={index} style={styles.badge}>
        <Icon.Feather name="star" size={20} color={Colors.ternaryBrand} />
        <Text
          style={{
            color: Colors.white,
            textAlign: 'center',
            alignSelf: 'center'
          }}
        >
          1/5
        </Text>
      </View>
    )
  }

  formatData = (data, numCol) => {
    let numElIncompleteRow = data.length % numCol
    while (numElIncompleteRow !== numCol && numElIncompleteRow !== 0) {
      data.push({ key: `blank-${numElIncompleteRow}`, empty: true })
      numElIncompleteRow++
    }
    return data
  }

  // TODO: unique badge id
  _keyExtractor = (item, index) => item.id

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.badgeHeader}>
          <Icon.Feather name="award" size={30} color={Colors.white} />
        </View>
        <FlatList
          data={this.formatData(data, 5)}
          renderItem={this.renderBadges}
          numColumns={5}
          keyExtractor={this._keyExtractor}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: Colors.primaryBrand.light
  },
  badgeHeader: {
    margin: 60
  },
  badge: {
    margin: 5,
    width: width / 5 - 21,
    height: width / 5 - 21,
    backgroundColor: Colors.primaryBrand.dark,
    borderRadius: width / 5 - 15
  }
})
