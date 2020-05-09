import {StyleSheet} from 'react-native';
import {colorStyles, borderRadiusStyles} from './_setting.core';

const rootLoadingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorStyles.background_loading,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  container_loading: {
    paddingHorizontal: 64,
    borderRadius: borderRadiusStyles.radius_16_x,
    paddingVertical: 32,
    backgroundColor: colorStyles.white,
  },

  description: {
    color: colorStyles.black,
    marginTop: 8,
  },
});

export {rootLoadingStyles};
