import React from "react";
import Colors from "../constants/Colors";
import Icon from "@expo/vector-icons";

const TabBarIcon = props => {
  return (
    <Icon.Feather
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;
