import React from "react";
import { Text as NativeText } from "react-native";

const getStyle = type => {
  const style = {
    text: {
      fontFamily: "HKGrotesk-light",
      fontSize: 18
    },
    subTitle: {
      fontFamily: "HKGrotesk-medium",
      fontSize: 20
    },
    title: {
      fontFamily: "VremenaGrotesk-medium",
      fontSize: 32
    }
  };
  switch (type) {
    case "text":
      return style.text;
    case "subTitle":
      return style.subTitle;
    case "title":
      return style.title;
  }
};

export const Text = props => {
  // TODO: add dynamic indexes (1 title - 2 subtitle - 3 text)
  return (
    <NativeText {...props} style={[props.style, getStyle(props.type)]}>
      {props.children}
    </NativeText>
  );
};
