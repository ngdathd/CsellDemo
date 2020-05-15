import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {rootLoadingStyles} from '../../styles/components';
import {colorStyles} from '../../styles/components';

export default class RootLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      textBody: 'Vui lòng chờ...',
    };
    global.rootLoadingContext = this;
  }

  render() {
    if (this.state.isShow) {
      return (
        <View style={rootLoadingStyles.container}>
          <View style={rootLoadingStyles.container_loading}>
            <ActivityIndicator size="large" color={colorStyles.green} />
            <Text style={rootLoadingStyles.description}>
              {this.state.textBody}
            </Text>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }
}
