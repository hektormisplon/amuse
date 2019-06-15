import { AsyncStorage } from 'react-native'

const DeviceStorage = {
  async save(key, value) {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (err) {
      console.log(`Could not save to AsyncStorage: ${err.message}`)
    }
  },

  async load(key) {
    try {
      await AsyncStorage.getItem(key)
    } catch (err) {
      console.log(`Could not load from AsyncStorage: ${err.message}`)
    }
  },

  async remove(key) {
    try {
      await AsyncStorage.removeItem(key)
    } catch (err) {
      console.log(`Could not remove from AsyncStorage: ${err.message}`)
    }
  },
}

export default DeviceStorage
