import React from "react";
import { Text as NativeText } from "react-native";

import PropTypes from 'prop-types'


/**
 * Reusable & typography styling
 */
const getStyle = type => {
  const style = {
    text: {
      fontFamily: "HKGrotesk-light",
      fontSize: 16,
      marginBottom: 16
    },
    largeText: {
      fontFamily: 'HKGrotesk-light',
      fontSize: 20,
      marginBottom: 20
    },
    subTitle: {
      fontFamily: "HKGrotesk-medium",
      fontSize: 20,
      marginBottom: 20
    },
    title: {
      fontFamily: "VremenaGrotesk-medium",
      fontSize: 32,
      marginBottom: 32
    }
  };
  switch (type) {
    case "text":
      return style.text;
    case 'largeText':
      return style.largeText
    case "subtitle":
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

Text.defaultProps = {
  type: 'text'
}