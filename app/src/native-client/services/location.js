import { IntentLauncherAndroid, Location, Permissions } from 'expo'
import { Linking, Platform } from 'react-native'

const DeviceLocation = {
  async getLocationServices() {
    try {
      console.log('getting location services')
      let locationEnabled = await Location.hasServicesEnabledAsync()
      this.setState({ locationEnabled: true })
    } catch (err) {
      console.error(`Could not get location service status ${err.message}`)
    }
  },

  async getLocationPermissions() {
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION)
      if (status !== 'granted') {
        return
      }
      this.setState({ locationPermission: true })
    } catch {
      console.error('Could not get location permission status')
    }
  },

  openLocationSettings() {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:')
    } else {
      IntentLauncherAndroid.startActivityAsync(
        IntentLauncherAndroid.ACTION_LOCATION_SOURCE_SETTINGS,
      )
    }
  },
}
export default DeviceLocation
