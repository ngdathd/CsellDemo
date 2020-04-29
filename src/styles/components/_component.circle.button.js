import {StyleSheet} from 'react-native';
import {colorStyles, fontSizeStyles} from './_setting.core';

const circleButtonStyles = StyleSheet.create({
  circleButton: {
    fontSize: fontSizeStyles.size_22_x,
    width: 54,
    height: 54,
    color: colorStyles.colorPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colorStyles.colorPrimary,
    borderRadius: 54,
  },
});

export {circleButtonStyles};
