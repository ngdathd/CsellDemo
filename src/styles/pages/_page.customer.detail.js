import {StyleSheet} from 'react-native';
import {colorStyles, fontSizeStyles, marginStyles} from '../components';

const customerDetailStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  avatar: {
    width: 80,
    height: 80,
  },

  description: {
    color: colorStyles.black,
    fontSize: fontSizeStyles.size_24_x,
    textAlign: 'center',
    margin: marginStyles.margin_16_x,
  },
});

export {customerDetailStyles};
