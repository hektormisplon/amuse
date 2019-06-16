// import Icon from "@expo/vector-icons/FontAwesome";
import { Icon } from 'expo'
import React, { Component } from 'react'
import { Animated, TouchableHighlight } from 'react-native'

/**
 * BottomTabNavigator custom button containing multiple subbuttons
 */
export const MainTourButton = ({ navigation }) => {
  const SIZE = 100
  navigation = { navigation }
  mode = new Animated.Value(0)

  toggleView = () => {
    Animated.timing(this.mode, {
      toValue: this.mode._value === 0 ? 1 : 0,
      duration: 300,
    }).start()
  }
  const firstX = this.mode.interpolate({
    inputRange: [0, 1],
    outputRange: [20, -40],
  })
  const firstY = this.mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  })
  const secondX = this.mode.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 20],
  })
  const secondY = this.mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  })
  const thirdX = this.mode.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 80],
  })
  const thirdY = this.mode.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -30],
  })

  // const opacity = this.mode.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: [0, 1]
  // });

  const rotation = this.mode.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })

  return (
    <React.Fragment>
      <Animated.View
        style={{
          position: 'absolute',
          left: firstX,
          top: firstY,
          // opacity
        }}
      >
        <TouchableHighlight
          onPress={() => {}}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE / 2,
            height: SIZE / 2,
            borderRadius: SIZE / 4,
            backgroundColor: '#48A2F8',
          }}
        >
          <Icon.Feather name="rocket" size={16} color="#F8F8F8" />
        </TouchableHighlight>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          left: secondX,
          top: secondY,
          // opacity
        }}
      >
        <TouchableHighlight
          onPress={() => {
            z
          }}
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE / 2,
            height: SIZE / 2,
            borderRadius: SIZE / 4,
            backgroundColor: '#48A2F8',
          }}
        >
          <Icon.Feather name="home" size={16} color="#F8F8F8" />
        </TouchableHighlight>
      </Animated.View>
      <Animated.View
        style={{
          position: 'absolute',
          left: thirdX,
          top: thirdY,
          // opacity
        }}
      >
        <TouchableHighlight
          onPress={() => {}}
          style={{
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE / 2,
            height: SIZE / 2,
            borderRadius: SIZE / 4,
            backgroundColor: '#48A2F8',
          }}
        >
          <Icon.Feather name="archive" size={16} color="#F8F8F8" />
        </TouchableHighlight>
      </Animated.View>

      <TouchableHighlight
        onPress={this.toggleView}
        underlayColor="#2882D8"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
          backgroundColor: '#48A2F8',
        }}
      >
        <Animated.View
          style={{
            transform: [{ rotate: rotation }],
          }}
        >
          <Icon.Feather name="map" size={24} color="#F8F8F8" />
        </Animated.View>
      </TouchableHighlight>
    </React.Fragment>
  )
}

const SIZE = 80
class AddButton extends Component {
  mode = new Animated.Value(0)

  toggleView = () => {
    Animated.timing(this.mode, {
      toValue: this.mode._value === 0 ? 1 : 0,
      duration: 300,
    }).start()
  }

  render() {
    const firstX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [20, -40],
    })
    const firstY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30],
    })
    const secondX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 20],
    })
    const secondY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30],
    })
    const thirdX = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 80],
    })
    const thirdY = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30],
    })

    // const opacity = this.mode.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, 1]
    // });

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })

    return (
      <React.Fragment>
        <Animated.View
          style={{
            position: 'absolute',
            left: firstX,
            top: firstY,
            // opacity
          }}
        >
          <TouchableHighlight
            onPress={() => {}}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: SIZE / 2,
              height: SIZE / 2,
              borderRadius: SIZE / 4,
              backgroundColor: '#48A2F8',
            }}
          >
            <Icon.Feather name="home" size={16} color="#F8F8F8" />
          </TouchableHighlight>
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            left: secondX,
            top: secondY,
            // opacity
          }}
        >
          <TouchableHighlight
            onPress={() => {}}
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              width: SIZE / 2,
              height: SIZE / 2,
              borderRadius: SIZE / 4,
              backgroundColor: '#48A2F8',
            }}
          >
            <Icon.Feather name="home" size={16} color="#F8F8F8" />
          </TouchableHighlight>
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            left: thirdX,
            top: thirdY,
            // opacity
          }}
        >
          <TouchableHighlight
            onPress={() => {}}
            style={{
              position: 'absolute',
              alignItems: 'center',
              justifyContent: 'center',
              width: SIZE / 2,
              height: SIZE / 2,
              borderRadius: SIZE / 4,
              backgroundColor: '#48A2F8',
            }}
          >
            <Icon.Feather name="archive" size={16} color="#F8F8F8" />
          </TouchableHighlight>
        </Animated.View>

        <TouchableHighlight
          onPress={this.toggleView}
          underlayColor="#2882D8"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: SIZE,
            height: SIZE,
            borderRadius: SIZE / 2,
            backgroundColor: '#48A2F8',
          }}
        >
          <Animated.View
            style={{
              transform: [{ rotate: rotation }],
            }}
          >
            <Icon.Feather name="map" size={24} color="#F8F8F8" />
          </Animated.View>
        </TouchableHighlight>
      </React.Fragment>
    )
  }
}

export default AddButton
