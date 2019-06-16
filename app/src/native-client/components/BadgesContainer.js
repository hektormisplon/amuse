import Icon from '@expo/vector-icons'
import axios from 'axios'
import React, { Component } from 'react'
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
} from 'react-native'
import Badge from '../components/Badge'
import Button from '../components/Button'
import api from '../config/api'
import { Colors } from '../styles'


import { Text } from '../components/StyledText'

const Loading = ({ title }) => (
  <ActivityIndicator size="large" color={Colors.ternaryBrand} />
)

/**
 * User badges container
 * - fetch badges
 * - render badges to flatlist grid layout
 */
export default class BadgesContainer extends Component {
  state = {
    loading: true,
    badges: [],
    details: null,
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
    const { loading, badges, details } = this.state
    return (
      <View style={styles.container}>
        <React.Fragment>
          <View style={styles.header}>
            <Icon.Feather name="award" size={30} color={Colors.white} />
          </View>
          <FlatList
            data={this.formatData(badges, 5)}
            renderItem={({ item }) => (
              <Badge
                data={item}
                onPress={() => this.setState({ details: item })}
              />
            )}
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
        </React.Fragment>
        {details && (
          <View style={styles.detailsContainer}>
            <Text style={styles.titleText}>{details.title}</Text>
            <View style={styles.detailBadge}>
              <Text style={styles.descriptionText}>{details.description}</Text>
              {details.amount && (
                // TODO user amount from db
                <Text style={styles.amountText}>{`0/${details.amount}`}</Text>
              )}
            </View>
            <Button
              style={styles.closeDetailButton}
              onPress={() => this.setState({ details: null })}
              icon={'x'}
              iconColor={Colors.primaryBrand.dark}
            ></Button>
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
  detailsContainer: {
    ...StyleSheet.absoluteFillObject,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
    backgroundColor: Colors.primaryBrand.dark,
    shadowColor: Colors.primaryBrand.light,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 5,
    paddingTop: 120,
    paddingBottom: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailBadge: {
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: Colors.primaryBrand.light,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 60
  },
  titleText: {  
    textAlign: 'center'
  },
  descriptionText: {
    textAlign: 'center'
  },
  amountText: {
    fontSize: 60,
    color: Colors.ternaryBrand
  },
  closeDetailButton: {
    backgroundColor: Colors.primaryBrand.light,
  },
})
