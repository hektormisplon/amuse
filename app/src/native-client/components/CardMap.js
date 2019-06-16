import React, { Component } from 'react'
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { MapStyle } from '../styles'

const Images = [
  { uri: 'https://picsum.photos/200/300?random=1' },
  { uri: 'https://picsum.photos/200/300?random=2' },
  { uri: 'https://picsum.photos/200/300?random=3' },
  { uri: 'https://picsum.photos/200/300?random=4' }
]

const { width, height } = Dimensions.get('window')

const CARD_HEIGHT = 0.38 * height - 45
const CARD_WIDTH = width

/**
 * Map scrollview
 * - shows cards of current location
 * - horizontal swipe w/ focus on card location
 */

export default class CardMap extends Component {
  state = {
    markers: [
      {
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817
        },
        title: 'First tour',
        description: 'This is the first tour',
        image: Images[0]
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507
        },
        title: 'Second tour',
        description: 'This is the second tour',
        image: Images[1]
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034
        },
        title: 'Third tour',
        description: 'This is the third tour',
        image: Images[2]
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917
        },
        title: 'Fourth tour',
        description: 'This is the fourth tour',
        image: Images[3]
      }
    ],
    region: {
      latitude: 45.52220671242907,
      longitude: -122.6653281029795,
      latitudeDelta: 0.04864195044303443,
      longitudeDelta: 0.040142817690068
    }
  }

  componentWillMount() {
    this.index = 0
    this.animation = new Animated.Value(0)
  }
  componentDidMount() {
    // detect scroll stop & animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH)
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1
      }
      if (index <= 0) {
        index = 0
      }

      clearTimeout(this.regionTimeout)
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index
          const { coordinate } = this.state.markers[index]
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta
            },
            300
          )
        }
      }, 30)
    })
  }

  render() {
    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH
      ]
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: 'clamp'
      })
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: 'clamp'
      })
      return { scale, opacity }
    })

    return (
      <View style={styles.container}>
        <MapView
          ref={map => (this.map = map)}
          initialRegion={this.state.region}
          style={styles.container}
          customMapStyle={MapStyle}
        >
          {this.state.markers.map((marker, index) => {
            const scaleStyle = {
              transform: [
                {
                  scale: interpolations[index].scale
                }
              ]
            }
            const opacityStyle = {
              opacity: interpolations[index].opacity
            }
            return (
              <MapView.Marker key={index} coordinate={marker.coordinate}>
                <Animated.View style={[styles.markerWrap, opacityStyle]}>
                  <Animated.View style={[styles.ring, scaleStyle]} />
                  <View style={styles.marker} />
                </Animated.View>
              </MapView.Marker>
            )
          })}
        </MapView>
        <Animated.ScrollView
          horizontal
          scrollEventThrottle={1}
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: this.animation
                  }
                }
              }
            ],
            { useNativeDriver: true }
          )}
          style={styles.scrollView}
          contentContainerStyle={styles.endPadding}
        >
          {this.state.markers.map((marker, index) => (
            <View style={styles.card} key={index}>
              <Image
                source={marker.image}
                style={styles.cardImage}
                resizeMode="cover"
              />
              <View style={styles.textContent} />
            </View>
          ))}
        </Animated.ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    position: 'absolute',
    bottom: 45,
    left: 0,
    right: 0,
    paddingVertical: 10
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH
  },
  card: {
    // padding: 10,
    backgroundColor: '#FFF',
    marginHorizontal: 30,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    // TODO: shadow
    height: CARD_HEIGHT,
    width: CARD_WIDTH - 60
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 10,
    borderColor: '#fff'
  },
  textContent: {
    flex: 1
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold'
  },
  cardDescription: {
    fontSize: 12,
    color: '#444'
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
