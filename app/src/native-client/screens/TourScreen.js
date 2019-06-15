import { IntentLauncherAndroid, Location, MapView, Permissions } from 'expo'
import React, { Component } from 'react'
import {
  Animated,
  AppState,
  Button,
  Linking,
  Platform,
  StyleSheet,
  View,
} from 'react-native'
import { Text } from '../components/StyledText'
import api from '../config/api'
import { MapStyle } from '../styles'

export default class TourScreen extends Component {
  static navigationOptions = {
    title: 'Tours',
    header: null,
  }

  state = {
    tours: null,
    tourWaypoints: null,
    appState: AppState.currentState,
    locationEnabled: null,
    location: null,
    locationPermission: false,
    region: {
      latitude: 51.0538286,
      longitude: 3.7250121,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068,
    },
  }

  componentDidMount() {
    this.getLocationServices()
    this.getLocationPermissions()
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

  /**
   * Handle user toggling location
   */
  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this.getLocationServices()
    }
    this.setState({ appState: nextAppState })
  }

  getLocationServices = async () => {
    try {
      let locationEnabled = await Location.hasServicesEnabledAsync()
      this.setState({ locationEnabled })
    } catch {
      console.error('Could not get location service status')
    }
  }

  getLocationPermissions = async () => {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION)
      if (status !== 'granted') {
        return
      }
      this.setState({ locationPermission: true })
    } catch {
      console.error('Could not get location permission status')
    }
  }

  openLocationSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:')
    } else {
      IntentLauncherAndroid.startActivityAsync(
        IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS,
      )
    }
  }

  showTourWaypoints = index => {
    this.setState({ tourWaypoints: this.state.tours[index].waypoints })
  }

  render() {
    const {
      tours,
      locationEnabled,
      locationPermission,
      tourWaypoints,
    } = this.state
    return (
      <React.Fragment>
        {locationEnabled === false && (
          <View style={styles.topContainer}>
            <Text>
              Your location services are disabled. Get the best out of our app
              and enable location services.
            </Text>
            <Button
              title="Enable location"
              onPress={this.openLocationSettings}
            />
          </View>
        )}
        {/* {tours && <CardMap data={tours} />} */}
        {tours && (
          <MapView
            ref={map => (this.map = map)}
            initialRegion={this.state.region}
            style={styles.bottomContainer}
            customMapStyle={MapStyle}
            showsUserLocation={locationPermission}
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
              )
            })}
            {tourWaypoints &&
              // <MapView.Polyline coordinates={tourWaypoints} />
              tourWaypoints.map((waypoint, index) => {
                return <MapView.Marker key={index} coordinate={waypoint} />
              })}
            {/* {testWaypoints && (
              <MapView.Polyline
                coordinates={testWaypoints}
                strokeWidth={5}
                strokeColor={Colors.primaryBrand.light}
              />
            )} */}
          </MapView>
        )}
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1.62,
  },
  map: {
    flex: 1,
  },

  container: {
    flex: 1,
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(130,4,150, 0.9)',
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(130,4,150, 0.3)',
    position: 'absolute',
    borderWidth: 1,
    borderColor: 'rgba(130,4,150, 0.5)',
  },
})
