import React from 'react';

import {
    StyleSheet,
    View,
    TouchableOpacity,
    Keyboard,
    Platform,
} from 'react-native';

import { Icon } from 'expo'

import { Colors } from '../styles'
import { Text } from '../components/StyledText'


/**
 * A custom tab bar component for a nested or secondary bottomTabNavigator
 */
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
                        title={getLabelText({ route })}
                        onPress={() =>
                            (!route.params || !route.params.navigationDisabled) &&
                            jumpTo(route.key)
                        }
                    />
                )}})}
        </View>
    );
}

const TabIcon = ({
    route,
    onPress,
    title
}) => (
    <TouchableOpacity
        onPress={() => onPress && onPress()}
        style={styles.tab}
    > 
        <Text type={'text'}>{title}</Text>
    </TouchableOpacity>
)

const  styles = StyleSheet.create({
    tabbarView: {
        height: 135,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
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
    },
});