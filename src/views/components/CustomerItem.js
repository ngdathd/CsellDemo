import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {customerStyles} from '../../styles/components';

class CustomerItemComponent extends Component {
  render() {
    const {onPressItem} = this.props;

    return (
      <TouchableOpacity onPress={onPressItem}>
        <View style={customerStyles.container}>
          <Image
            source={{uri: this.props.image_url}}
            style={customerStyles.photo}
          />
          <View style={customerStyles.container_text}>
            <Text style={customerStyles.title}>{this.props.title}</Text>
            <Text style={customerStyles.description}>
              {this.props.description}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CustomerItemComponent;
