import React, { Component } from "react";
import {
  Platform,
  Linking,
  Dimensions,
  StyleSheet,
  View,
  Button,
  AppState
} from "react-native";
import {
  Constants,
  Location,
  Permissions,
  IntentLauncherAndroid,
  MapView
} from "expo";
import { SafeAreaView } from "react-navigation";
import { Text, Title } from "../components/StyledText";

import Colors from "../constants/Colors";
import TourList from "../components/TourList";

export default class TourScreen extends Component {
  state = {
    loading: true,
    tours: [],
    appState: AppState.currentState,
    mapRegion: null,
    locationEnabled: null,
    locationPermission: false,
    location: null
  };

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
    this._checkLocationServices();
    this._getLocationAsync();
    fetch("http://192.168.20.116:3000/api/v1/tours")
      .then(res => {
        return res.json();
      })
      .then(json => this.setState({ tours: json, loading: false }))
      .then(() => {
        this.state.tours.forEach(tour => {
          console.log(JSON.stringify(tour));
        });
      })
      .catch(err => this.setState({ loading: false }));
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  _handleAppStateChange = nextAppState => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      this._checkLocationServices();
      this._getLocationAsync();
    }
    this.setState({ appState: nextAppState });
  };

  _checkLocationServices = async () => {
    let locationEnabled = await Location.hasServicesEnabledAsync();
    locationEnabled
      ? this.setState({ locationEnabled: true })
      : this.setState({ locationEnabled: false });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        locationPermission: false
      });
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  showLocationSettings = () => {
    if (Platform.OS === "ios") {
      Linking.openURL("app-settings:");
    } else {
      IntentLauncherAndroid.startActivityAsync(
        IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS
      );
    }
  };

  render() {
    const { loading, tours, locationEnabled, location } = this.state;
    return (
      <SafeAreaView>
        {locationEnabled ? (
          <View style={styles.topContainer}>
            <Title>Tour name</Title>
            <Text>Tour details</Text>
          </View>
        ) : (
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
        <View style={styles.bottomContainer}>
          {location && (
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 51.05,
                longitude: 3.71667,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
              region={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
              }}
            >
              {/* <React.Fragment>
                {!loading && (
                  <View>
                    {tours.map((tour, index) => {
                      return (
                        <MapView.Marker
                          key={index}
                          coordinate={{
                            latitude: Number(tour.waypoints[0].lat),
                            longitude: Number(tour.waypoints[0].lng)
                          }}
                        />
                      );
                    })}
                  </View>
                )}
              </React.Fragment> */}
              {!loading && (
                <View>
                  {tours[0].waypoints.map((waypoint, index) => {
                    return (
                      <MapView.Marker
                        key={index.toString()}
                        coordinate={{
                          latitude: Number(waypoint["lat"]),
                          longitude: Number(waypoint["lng"])
                        }}
                        title={index.toString()}
                      />
                    );
                  })}
                </View>
              )}
              <MapView.Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude
                }}
                title={"Your are here"}
              />
            </MapView>
          )}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    height: Dimensions.get("window").height * 0.38,
    justifyContent: "center",
    color: Colors.primaryBrand.light
  },
  bottomContainer: {
    height: Dimensions.get("window").height * 0.62,
    color: Colors.primaryBrand.light
  },
  map: {
    flex: 1
  }
});
