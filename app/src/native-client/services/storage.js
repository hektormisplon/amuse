import { AsyncStorage } from 'react-native'

const deviceStorage = {
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
    try{
      await AsyncStorage.removeItem(key)
    } catch (error) {
        console.log(`Could not remove from AsyncStorage: ${err.message}`)
    }
  }
//   async loadJWT() {
//     try {
//       const value = this.load('jwtToken')
//       if (value !== null) {
//         this.setState({
//           jwt: value,
//           loading: false,
//         })
//       } else {
//         this.setState({
//           loading: false,
//         })
//       }
//     } catch (error) {
//       console.log('AsyncStorage Error: ' + error.message)
//     }
//   },

}

export default deviceStorage
