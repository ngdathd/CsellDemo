import {StyleSheet} from 'react-native';
import {colorStyles, fontSizeStyles, marginStyles} from '../components';

const productCreateStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  containerInput: {
    flexDirection: 'column',
  },

  containerPicker: {
    flex: 1,
    marginRight: 8,
  },

  inputStyles: {
    marginTop: 8,
  },

  inputPhoneStyles: {
    flex: 3,
  },

  containerPhoneStyles: {
    flexDirection: 'row',
    marginTop: 8,
  },

  containerButtonStyles: {
    margin: 16,
  },

  buttonStyles: {
    borderRadius: 8,
    height: 40,
  },

  description: {
    color: colorStyles.black,
    fontSize: fontSizeStyles.size_24_x,
    textAlign: 'center',
    margin: marginStyles.margin_16_x,
  },
});

export {productCreateStyles};
