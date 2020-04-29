import React, {Component} from 'react';

import {ToolbarComponent} from '../../components';
import {Text, Image, View} from 'react-native';
import {customerDetailStyles as styles} from '../../../styles/pages';

class CustomerDetail extends Component {
  onPressBack() {
    this.props.navigation.goBack();
  }
  render() {
    const {title, description, image_url} = this.props.route.params;

    return (
      <>
        <ToolbarComponent
          title={title}
          options={{
            title: true,
            buttonMenu: false,
            buttonBack: true,
            buttonSearch: false,
            buttonFilter: false,
          }}
          onPressBack={() => this.onPressBack()}
        />
        <View style={styles.container}>
          <Image style={styles.avatar} source={{uri: image_url}} />
          <Text style={styles.description}>email: {description}</Text>
        </View>
      </>
    );
  }
}

export default CustomerDetail;
