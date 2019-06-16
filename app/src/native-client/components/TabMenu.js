import React from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    Platform,
} from 'react-native';

import { Icon } from 'expo'

import { Colors } from '../styles'

export const TabMenu = props => {
    const {
        navigation: {
            state: { index, routes }
        },
        activeTintColor,
        inactiveTintColor,
        renderIcon,
        jumpTo,
        getLabelText
    } = props
    return (
        <View style={[styles.tabbarView]}>
            {routes.map((route, id) => {
                const focused = index === id
                if (!route.params || !route.params.navigationDisabled) {
                return(
                    <TabIcon 
                        key={route.key}
                        route={route}
                        style={styles.tab}
                        renderIcon={renderIcon}
                        title={getLabelText({ route })}
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
    );
}

const TabIcon = ({
    route,
    renderIcon,
    focused,
    activeTintColor,
    inactiveTintColor,
    onPress,
    title
    }) => (
    <TouchableOpacity
        onPress={() => onPress && onPress()}
        style={styles.iconView}
    > 
        <Text>{title}</Text>
        {renderIcon({
        route,
        focused,
        tintColor: focused ? Colors.primaryBrand.light : Colors.ternaryBrand
        })}
    </TouchableOpacity>
)

const  styles = StyleSheet.create({
    tabbarView: {
        height: 135,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 30,
        paddingBottom: 75,
        backgroundColor: 'transparent',
        borderWidth: .8,
        borderBottomWidth: 0,
        borderColor: Colors.ternaryBrand,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
    },
    tab: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f00'
    },
});