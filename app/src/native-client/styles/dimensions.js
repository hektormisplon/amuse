import { Dimensions } from 'react-native';

/**
 * Small styling service to get width & height of screen
 * (To be used as a flex replacement)
 */
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};