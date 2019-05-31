import React from "react";
import {
  View,
  StyleSheet,
  // TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import Colors from "../constants/Colors";

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
  } = props;
  return (
    <SafeAreaView
      pointerEvents="box-none"
      style={styles.container}
      forceInset={{
        top: "never",
        bottom: "always"
      }}
    >
      <View pointerEvents="box-none" style={styles.content}>
        {routes.map((route, idx) => {
          const focused = index === idx;

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
            );
          }

          const Icon = renderIcon({
            route,
            focused,
            tintColor: focused ? activeTintColor : inactiveTintColor
          });

          return {
            ...Icon,
            key: "simple"
          };
        })}
      </View>
    </SafeAreaView>
  );
};

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
);

const styles = StyleSheet.create({
  tourTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    backgroundColor: Colors.primaryBrand.light,
    borderRadius: 60
  },
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    justifyContent: "flex-end",
    minHeight: 120,
    borderWidth: 1,
    borderColor: "#ff0000"
  },
  fakeBackground: {
    position: "absolute",
    width: "100%",
    borderWidth: 1,
    borderColor: "#00ff00"
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#0000ff"
  },
  tabStyle: {
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#000"
  }
});
