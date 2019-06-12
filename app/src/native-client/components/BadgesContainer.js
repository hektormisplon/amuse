import Icon from '@expo/vector-icons'
import React, { Component } from 'react'
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import { Colors } from '../styles'

const data = [
  { title: 'Badge', id: '01', icon: 'start' },
  { title: 'Badge', id: '02', icon: 'star' },
  {
    title: 'Badge',
    id: '04',
    icon: 'users',
    description: 'Join a club',
    amount: '1'
  },
  {
    title: 'Badge',
    id: '05',
    icon: 'users',
    description: 'Join 3 clubs',
    amount: '3'
  },
  { title: 'Badge', id: '06', icon: 'user' },
  { title: 'Badge', id: '07', icon: '' },
  { title: 'Badge', id: '08', icon: '' },
  { title: 'Badge', id: '09', icon: '' },
  { title: 'Badge', id: '10', icon: '' },
  { title: 'Badge', id: '11', icon: '' },
  { title: 'Badge', id: '12', icon: '' },
  { title: 'Badge', id: '14', icon: '' },
  { title: 'Badge', id: '15', icon: '' },
  { title: 'Badge', id: '16', icon: '', locked: true },
  { title: 'Badge', id: '17', icon: '', locked: true },
  { title: 'Badge', id: '18', icon: '', locked: true },
  { title: 'Badge', id: '19', icon: '', locked: true },
  { title: 'Badge', id: '20', icon: '', locked: true }
]

const width = Dimensions.get('window').width

export default class BadgesContainer extends Component {
  renderBadges = badge => {
    const { title, id, icon, amount, locked } = badge.item
    if (!locked) {
      return (
        <TouchableOpacity style={[styles.badge, styles.unlockedBadge]}>
          <Icon.Feather
            name={icon ? icon : 'star'}
            size={15}
            color={Colors.ternaryBrand}
          />
          <Text
            style={{
              color: Colors.white,
              textAlign: 'center',
              alignSelf: 'center'
            }}
          >
            {amount && <Text>{amount}</Text>}
          </Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={[styles.badge, styles.lockedBadge]}>
          <Icon.Feather
            name={'lock'}
            size={15}
            color={Colors.secondaryBrand.light}
          />
        </View>
      )
    }
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
    borderRadius: width / 5 - 15
  },
  lockedBadge: {
    // borderColor: Colors.primaryBrand.light,
    opacity: 0.5
    // borderWidth: 5
  },
  unlockedBadge: {
    backgroundColor: Colors.primaryBrand.light,
    shadowColor: Colors.primaryBrand.light,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5
  }
})
