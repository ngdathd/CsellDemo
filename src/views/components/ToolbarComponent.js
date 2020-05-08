import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import {colorStyles, toolbarStyles} from '../../styles/components';

class ToolbarComponent extends Component {
  render() {
    const {
      onPressMenu,
      onPressBack,
      onPressSearch,
      onPressFilter,
      title = 'Csell',
      background = colorStyles.colorPrimary,
      options = {
        title: true,
        buttonMenu: true,
        buttonBack: false,
        buttonSearch: true,
        buttonFilter: true,
      },
    } = this.props;

    return (
      <>
        <StatusBar
          barStyle="default"
          hidden={false}
          backgroundColor={background}
          translucent={false}
        />
        <View style={toolbarStyles.containerToolbar}>
          <View style={toolbarStyles.contentToolbar}>
            {options.buttonMenu ? (
              <TouchableOpacity
                style={toolbarStyles.buttonToolbar}
                onPress={onPressMenu}>
                <Icon name="menu" size={24} color="white" />
              </TouchableOpacity>
            ) : null}

            {options.buttonBack ? (
              <TouchableOpacity
                style={toolbarStyles.buttonToolbar}
                onPress={onPressBack}>
                <Icon name="arrow-left" size={24} color="white" />
              </TouchableOpacity>
            ) : null}

            {options.title ? (
              <Text style={toolbarStyles.titleToolbar}>{title}</Text>
            ) : null}
          </View>
          <View style={toolbarStyles.contentToolbar}>
            {options.buttonSearch ? (
              <TouchableOpacity
                style={toolbarStyles.buttonToolbar}
                onPress={onPressSearch}>
                <Icon name="search" size={24} color="white" />
              </TouchableOpacity>
            ) : null}
            {options.buttonFilter ? (
              <TouchableOpacity
                style={toolbarStyles.buttonToolbar}
                onPress={onPressFilter}>
                <Icon name="filter" size={24} color="white" />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </>
    );
  }
}

export default ToolbarComponent;
