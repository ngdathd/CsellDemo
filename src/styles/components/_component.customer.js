import {StyleSheet} from 'react-native';
import {
  colorStyles,
  paddingStyles,
  marginStyles,
  borderRadiusStyles,
} from './_setting.core';

const customerStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: paddingStyles.padding_10_x,
    marginLeft: marginStyles.margin_16_x,
    marginRight: marginStyles.margin_16_x,
    marginTop: marginStyles.margin_8_x,
    marginBottom: marginStyles.margin_8_x,
    borderRadius: borderRadiusStyles.radius_4_x,
    backgroundColor: colorStyles.white,
    elevation: 2,
  },

  title: {
    fontSize: 16,
    color: colorStyles.black,
  },

  container_text: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },

  description: {
    fontSize: 11,
    fontStyle: 'italic',
  },

  photo: {
    height: 50,
    width: 50,
  },
});

export {customerStyles};
