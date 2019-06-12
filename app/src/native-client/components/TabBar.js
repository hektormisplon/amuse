import React from 'react'
import {
  // TouchableWithoutFeedback,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native'
import { Colors } from '../styles'

export const TabBar = props => {
  const {
    navigation: {
      state: { index, routes }
    },
    style,
    activeTintColor,
    inactiveTintColor,
    renderIcon,
    jumpTo
  } = props

  return (
    <SafeAreaView
      pointerEvents="box-none"
      style={styles.container}
      forceInset={{
        top: 'never',
        bottom: 'always'
      }}
    >
      <View pointerEvents="box-none" style={[styles.content, style]}>
        {routes.map((route, idx) => {
          const focused = index === idx
          if (!route.params || !route.params.navigationDisabled) {
            return (
              <TabIcon
                key={route.key}
                route={route}
                renderIcon={renderIcon}
                focused={focused}
                activeTintColor={activeTintColor}
                inactiveTintColor={inactiveTintColor}
                onPress={() =>
                  (!route.params || !route.params.navigationDisabled) &&
                  jumpTo(route.key)
                }
              />
            )
          }
          const Icon = renderIcon({
            route,
            focused,
            tintColor: focused ? activeTintColor : inactiveTintColor
          })
          return {
            ...Icon,
            key: 'simple'
          }
        })}
      </View>
    </SafeAreaView>
  )
}

const TabIcon = ({
  route,
  renderIcon,
  focused,
  activeTintColor,
  inactiveTintColor,
  onPress
}) => (
  <TouchableOpacity
    style={styles.tabStyle}
    onPress={() => onPress && onPress()}
  >
    {renderIcon({
      route,
      focused,
      tintColor: focused ? activeTintColor : inactiveTintColor
    })}
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  tourTab: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 120,
    backgroundColor: Colors.primaryBrand.light,
    borderRadius: 60
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
    minHeight: 120
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 30,
    borderRadius: 30,
    backgroundColor: Colors.white,
    shadowColor: Colors.primaryBrand.light,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 10
  },
  tabStyle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    shadowColor: Colors.primaryBrand.light,
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 5
  }
})
