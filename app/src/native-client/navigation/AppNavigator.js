import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainStack from "./MainStack";
import AuthStack from "./AuthStack";

export default createAppContainer(
  createSwitchNavigator(
    {
      // reference - https://reactnavigation.org/docs/en/auth-flow.html
      Auth: AuthStack,
      Main: MainStack
    },
    {
      // initialRouteName: "Auth"
      initialRouteName: "Main"
    }
  )
);
