import {StyleSheet} from 'react-native';
import {
  colorStyles,
  marginStyles,
  paddingStyles,
  borderRadiusStyles,
  fontSizeStyles,
} from '../components';

const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorStyles.white,
  },
  txtHeaderLogin: {
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
  containerFormInput: {
    marginTop: 50,
    marginStart: marginStyles.margin_30_x,
    marginEnd: marginStyles.margin_30_x,
  },
  iconInput: {
    paddingRight: 12,
    width: 30,
  },
  buttonLogin: {
    height: 50,
    marginStart: marginStyles.margin_30_x,
    marginEnd: marginStyles.margin_30_x,
    backgroundColor: colorStyles.green,
    borderRadius: borderRadiusStyles.radius_16_x,
    justifyContent: 'center',
    marginTop: marginStyles.margin_30_x,
    marginBottom: marginStyles.margin_30_x,
  },
  textLogin: {
    color: 'white',
    fontSize: fontSizeStyles.size_16_x,
    alignSelf: 'center',
  },
});

export {loginStyles};
