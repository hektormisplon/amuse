import Icon from '@expo/vector-icons'
import axios from 'axios'
import React, { Component } from 'react'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Badge from '../components/Badge'
import api from '../config/api'
import { Colors } from '../styles'

const Loading = ({ title }) => (
  <ActivityIndicator size="large" color={Colors.ternaryBrand} />
)

export default class BadgesContainer extends Component {
  state = {
    loading: true,
    badges: [],
  }

  componentDidMount() {
    this.getBadges()
  }

  getBadges = async () => {
    axios
      .get(`http://${api}/api/v1/badges?20`)
      .then(res => {
        this.setState({ badges: res.data, loading: false })
      })
      .catch(err => {
        console.log(err)
        this.setState({ loading: false })
      })
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
    const { loading, badges } = this.state
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon.Feather name="award" size={30} color={Colors.white} />
        </View>
        <FlatList
          data={this.formatData(badges, 5)}
          renderItem={({ item }) => <Badge {...item} />}
          numColumns={5}
          keyExtractor={this._keyExtractor}
          ListEmptyComponent={<Loading title="Loading badges" />}
          contentContainerStyle={styles.badgeContainer}
        />
        {!badges && loading === false && (
          <View style={styles.container}>
            <Text>
              Sorry, we could not load your badges at this time. Please verify
              if you have an internet connection.
            </Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    margin: 60,
  },
  badgeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 120,
  },
})
