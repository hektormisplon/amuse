import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Colors } from '../styles'

const VerticalSplit = props => {
  const { top, bottom, colored, noPadding } = props
  return (
    <View style={{ flex: 1, padding: !noPadding ? 30 : 0 }}>
      <View
        style={[
          styles.top,
          {
            backgroundColor:
              colored === 'top' ? Colors.primaryBrand.light : null
          }
        ]}
      >
        {top}
      </View>
      <View
        style={[
          styles.bottom,
          {
            backgroundColor:
              colored === 'bottom' ? Colors.primaryBrand.light : null
          }
        ]}
      >
        {bottom}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    flex: 0.62,
    justifyContent: 'center'
  },
  bottom: {
    flex: 0.38
  }
})
export default VerticalSplit
