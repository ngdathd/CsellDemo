import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {splashStyles} from '../../../styles/pages';

class Splash extends Component {
  render() {
    return (
      <View style={splashStyles.container}>
        <View style={splashStyles.txtHeaderSplash}>
          <Text style={splashStyles.textHello1}>Chào mừng bạn,</Text>
          <Text style={splashStyles.textHello2}>vui lòng đợi...</Text>
        </View>
        <ActivityIndicator size="large" style={splashStyles.indicator} />
      </View>
    );
  }
}

export default Splash;
