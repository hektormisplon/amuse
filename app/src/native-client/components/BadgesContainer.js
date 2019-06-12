import Icon from '@expo/vector-icons';
import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Badge from '../components/Badge';
import { Colors } from '../styles';

const data = [
  {
    title: 'Badge',
    id: '01',
    icon: 'user',
    description: 'Complete your profile'
  },
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

export default class BadgesContainer extends Component {
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
        <View style={styles.header}>
          <Icon.Feather name="award" size={30} color={Colors.white} />
        </View>
        <FlatList
          data={this.formatData(data, 5)}
          // renderItem={this.renderBadges}
          renderItem={({ item }) => <Badge {...item} />}
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
    alignItems: 'center'
  },
  header: {
    margin: 60
  }
})
