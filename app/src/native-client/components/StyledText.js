import React from 'react';
import { Text as NativeText } from 'react-native';

export class Text extends React.Component {
  render() {
    return <NativeText {... this.props} style={[this.props.style, {fontFamily: 'HKGrotesk-light', fontSize: 18}]}></NativeText>
  }
}

// 32
export class Title extends React.Component {
  render() {
    return <NativeText {... this.props} style={[this.props.style, {fontFamily: 'VremenaGrotesk-medium', fontSize: 32}]}></NativeText>
  }
}

export class SubTitle extends React.Component {
  render() {
    return <NativeText {... this.props} style={[this.props.style, {fontFamily: 'HKGrotesk-medium', fontSize: 20}]}></NativeText>
  }
}