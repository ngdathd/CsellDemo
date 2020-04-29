import {StyleSheet} from 'react-native';
import {colorStyles, paddingStyles, marginStyles} from './_setting.core';

const toolbarStyles = StyleSheet.create({
  containerToolbar: {
    backgroundColor: colorStyles.colorPrimary,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentToolbar: {
    backgroundColor: colorStyles.colorPrimary,
    height: 50,
    paddingRight: paddingStyles.padding_16_x,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonToolbar: {
    backgroundColor: colorStyles.colorPrimary,
    width: 24,
    marginLeft: paddingStyles.padding_16_x,
    height: 24,
  },
  titleToolbar: {
    marginLeft: marginStyles.margin_16_x,
    fontSize: 20,
    color: 'white',
  },
});

export {toolbarStyles};
