import React from 'react';
import { Text as NativeText } from 'react-native';

export class Text extends React.Component {
  render() {
    return <NativeText {... this.props} style={[this.props.style, {fontFamily: 'HKGrotesk-light', fontSize: 18}]}></NativeText>
  }
}

export class Title extends React.Component {
  render() {
    return <NativeText {... this.props} style={[this.props.style, {fontFamily: 'VremenaGrotesk-medium', fontSize: 28}]}></NativeText>
  }
}

export class TextWhite extends React.Component {
  render() {
    return <NativeText {... this.props} style={[this.props.style, {fontFamily: 'HKGrotesk-light', fontSize: 20}]}></NativeText>
  }
}
