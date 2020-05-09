import {StyleSheet} from 'react-native';
import {colorStyles, paddingStyles, fontSizeStyles} from '../components';

const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorStyles.white,
  },
  txtHeaderSplash: {
    marginTop: 80,
    paddingStart: paddingStyles.padding_30_x,
    paddingEnd: paddingStyles.padding_30_x,
  },
  textHello1: {
    fontSize: fontSizeStyles.size_26_x,
    color: colorStyles.green,
  },
  textHello2: {
    fontSize: fontSizeStyles.size_26_x,
    color: colorStyles.black,
  },
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 56,
  },
});

export {splashStyles};
