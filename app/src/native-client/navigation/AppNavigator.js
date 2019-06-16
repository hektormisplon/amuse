import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

import { ScreenTransisions } from '../styles'

/**
 * Appcontainer for navigation (react navigation)
 * - Top level navigator
 * - Entry point for authentication
 */

export default createAppContainer(
  createSwitchNavigator(
    {
      // reference - https://reactnavigation.org/docs/en/auth-flow.html
      Auth: AuthStack,
      Main: MainStack
    },
    {
      initialRouteName: 'Auth',
      // initialRouteName: 'Main'
      transitionConfig: () => ScreenTransitions.fromLeft(),
    }
  )
)
