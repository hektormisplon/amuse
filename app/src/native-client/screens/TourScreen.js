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
import { Location, Permissions, IntentLauncherAndroid, MapView } from "expo";
import { SafeAreaView } from "react-navigation";
import { Text, Title } from "../components/StyledText";

import Colors from "../constants/Colors";
import TourList from "../components/TourList";
import { UserMarker, MuseumMarker } from "../components/MapMarker";
import mapStyle from "../constants/mapStyle";

import api from "../config/api";

export default class TourScreen extends Component {
  static navigationOptions = {
    title: "Tours",
    header: null
  };

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
    fetch(`http://${api}/api/v1/tours`)
      .then(res => {
        return res.json();
      })
      .then(json => this.setState({ tours: json, loading: false }))
      .catch(err => {
        this.setState({ loading: true });
        console.log("Could not fetch maps");
      });
  }

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  // makes sure map reloads after user changes location settings
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

  // check & remember if location services enabled
  _checkLocationServices = async () => {
    let locationEnabled = await Location.hasServicesEnabledAsync();
    locationEnabled
      ? this.setState({ locationEnabled: true })
      : this.setState({ locationEnabled: false });
  };

  // get user's current location
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

  // redirect to settings/location settings
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
      <React.Fragment>
        {locationEnabled ? (
          <View style={styles.topContainer} />
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
              rotateEnabled={false}
              loadingEnabled={true}
              customMapStyle={mapStyle}
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
              <MapView.Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude
                }}
                title={"Your are here"}
              >
                <UserMarker />
              </MapView.Marker>
              {!loading && (
                <View>
                  {console.log(tours)}
                  {tours.map(tour => {
                    return tour.waypoints.map((waypoint, index) => {
                      return (
                        <MapView.Marker
                          key={index.toString()}
                          coordinate={{
                            latitude: waypoint["lat"],
                            longitude: waypoint["lng"]
                          }}
                          title={tour.title}
                        >
                          <MuseumMarker />
                        </MapView.Marker>
                      );
                    });
                  })}
                </View>
              )}
            </MapView>
          )}
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    flex: 0.38,
    // height: Dimensions.get("window").height * 0.38,
    justifyContent: "center",
    color: Colors.primaryBrand.light
  },
  bottomContainer: {
    flex: 0.62,
    // height: Dimensions.get("window").height * 0.62,
    color: Colors.primaryBrand.light
  },
  map: {
    // flex: 1,
    height: "110%",
    width: "100%"
  }
});
