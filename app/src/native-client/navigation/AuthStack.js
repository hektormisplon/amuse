import { createStackNavigator } from 'react-navigation'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import AuthScreen from '../screens/AuthScreen'
import { Colors, ScreenTransitions } from '../styles'

/**
 * Authentication flow routes
 * - Animated transitions
 */
export default createStackNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthScreen
  },
  {
    initialRouteName: 'AuthLoading',
    transitionConfig: () => ScreenTransitions.fromLeft(),
  }
)
