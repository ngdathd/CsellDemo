import {StyleSheet} from 'react-native';
import {colorStyles, marginStyles, fontSizeStyles} from '../components';
import {Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const friendStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorStyles.white,
    minHeight: 1,
    minWidth: 1,
  },
  body: {
    marginLeft: marginStyles.margin_16_x,
    marginRight: marginStyles.margin_16_x,
    maxWidth: SCREEN_WIDTH - (80 + 16 + 20),
  },
  image: {
    height: 80,
    width: 80,
  },
  nameRed: {
    fontSize: fontSizeStyles.size_20_x,
    fontWeight: 'bold',
    color: colorStyles.red,
  },
  nameBlue: {
    fontSize: fontSizeStyles.size_20_x,
    fontWeight: 'bold',
    color: colorStyles.blue,
  },
  nameGreen: {
    fontSize: fontSizeStyles.size_20_x,
    fontWeight: 'bold',
    color: colorStyles.green,
  },
  description: {
    fontSize: fontSizeStyles.size_14_x,
    opacity: 0.5,
    backgroundColor: colorStyles.red,
  },
  listItem: {
    flexDirection: 'row',
    margin: marginStyles.margin_10_x,
  },
});

export {friendStyles};
