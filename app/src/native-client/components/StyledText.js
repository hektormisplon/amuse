import React from 'react';
import { Text as NativeText } from 'react-native';

export class MonoText extends React.Component {
  render() {
    return <NativeText {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
export class Text extends React.Component {
  render() {
    return <NativeText {... this.props} style={[this.props.style, {fontFamily: 'HKGrotesk-light'}]}></NativeText>
  }
}