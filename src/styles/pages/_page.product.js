import {StyleSheet} from 'react-native';
import {colorStyles, marginStyles} from '../components';

const productStyles = StyleSheet.create({
  scrollView: {
    backgroundColor: colorStyles.white,
  },

  floatButton: {
    flex: 1,
    margin: marginStyles.margin_16_x,
    flexDirection: 'column-reverse',
    alignItems: 'flex-end',
  },
});

export {productStyles};
