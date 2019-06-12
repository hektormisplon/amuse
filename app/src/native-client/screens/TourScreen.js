import { IntentLauncherAndroid, Location, Permissions } from 'expo'
import React, { Component } from 'react'
import {
  AppState,
  Button,
  Linking,
  Platform,
  StyleSheet,
  View
} from 'react-native'
import CardMap from '../components/CardMap'
import { Text } from '../components/StyledText'
import api from '../config/api'

export default class TourScreen extends Component {
  static navigationOptions = {
    title: 'Tours',
    header: null
  }

  state = {
    tours: null,
    tourWaypoints: null,
    appState: AppState.currentState,
    locationEnabled: null,
    location: null,
    region: {
      latitude: 51.0538286,
      longitude: 3.7250121,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068
    }
  }

  componentDidMount() {
    this._checkLocationServices()
    this._getLocationAsync()
    fetch(`http://${api}/api/v1/tours`)
      .then(res => {
        return res.json()
      })
      .then(json => this.setState({ tours: json }))
      .catch(err => {
        console.log('Could not fetch maps')
      })
    AppState.addEventListener('change', this._handleAppStateChange)
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange)
  }

  // makes sure map reloads after user changes location settings
  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this._checkLocationServices()
      this._getLocationAsync()
    }
    this.setState({ appState: nextAppState })
  }

  // check & remember if location services enabled
  _checkLocationServices = async () => {
    let locationEnabled = await Location.hasServicesEnabledAsync()
    locationEnabled
      ? this.setState({ locationEnabled: true })
      : this.setState({ locationEnabled: false })
  }

  // get user's current location
  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      return
    }
    let location = await Location.getCurrentPositionAsync({})
    this.setState({ location })
  }

  // redirect to settings/location settings
  showLocationSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:')
    } else {
      IntentLauncherAndroid.startActivityAsync(
        IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
      )
    }
  }

  showTourWaypoints = index => {
    this.setState({ tourWaypoints: this.state.tours[index].waypoints })
  }

  render() {
    const { tours, locationEnabled, location, tourWaypoints } = this.state
    return (
      <React.Fragment>
        {locationEnabled === false && (
          <View style={styles.topContainer}>
            <Button
              title="Enable location"
              onPress={this.showLocationSettings}
            />
            <Text>
              Your location services are disabled. Get the best out of our app
              and enable location services.
            </Text>
          </View>
        )}
        {tours && <CardMap data={tours} />}
        {/* {tours && (
          <MapView
            ref={map => (this.map = map)}
            initialRegion={this.state.region}
            style={styles.bottomContainer}
            customMapStyle={MapStyle}
          >
            {tours.map((tour, index) => {
              return (
                <MapView.Marker
                  key={index}
                  coordinate={tour.waypoints[0]}
                  onPress={() => this.showTourWaypoints(index)}
                >
                  <Animated.View style={styles.markerWrap}>
                    <Animated.View style={styles.ring} />
                    <View style={styles.marker} />
                  </Animated.View>
                </MapView.Marker>
              );
            })}
            {tourWaypoints && (
              <MapView.Polyline coordinates={tourWaypoints} />
              // tourWaypoints.map((waypoint, index) => {
              //   return <MapView.Marker key={index} coordinate={waypoint} />;
              // })
            )}
          </MapView>
        )} */}
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1
    // height: Dimensions.get("window").height * 0.38,
    // color: Colors.primaryBrand.light
    // justifyContent: "center",
  },
  bottomContainer: {
    flex: 1.62
    // height: Dimensions.get("window").height * 0.62,
    // color: Colors.primaryBrand.light
  },
  map: {
    flex: 1
  },

  container: {
    flex: 1
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)'
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(130,4,150, 0.5)'
  }
})
