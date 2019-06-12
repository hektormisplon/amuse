import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AuthStack from './AuthStack'
import MainStack from './MainStack'

export default createAppContainer(
  createSwitchNavigator(
    {
      // reference - https://reactnavigation.org/docs/en/auth-flow.html
      Auth: AuthStack,
      Main: MainStack
    },
    {
      // initialRouteName: 'Auth'
      initialRouteName: 'Main'
    }
  )
)
