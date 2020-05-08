import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

class Splash extends Component {
  render() {
    const viewStyles = {backgroundColor: 'orange'};
    const textStyles = {
      color: 'white',
      fontSize: 40,
      fontWeight: 'bold',
    };
    return (
      <View style={{flex: 1, backgroundColor: 'orange'}}>
        <Text style={textStyles}>Splash Screen</Text>
      </View>
    );
  }
}

export default Splash;
