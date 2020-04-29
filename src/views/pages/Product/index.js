import React, {Component} from 'react';

import {ToolbarComponent} from '../../components';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {circleButtonStyles, colorStyles} from '../../../styles/components';
import {productStyles} from '../../../styles/pages';

class Product extends Component {
  onPressMenu() {
    this.props.navigation.openDrawer();
  }

  onPressSearchProduct() {
    console.log('onPressSearchProduct');
  }

  onPressFilterProduct() {
    console.log('onPressFilterProduct');
  }

  render() {
    return (
      <>
        <ToolbarComponent
          title="Product"
          options={{
            title: true,
            buttonMenu: true,
            buttonSearch: true,
            buttonFilter: true,
          }}
          onPressMenu={() => this.onPressMenu()}
          onPressSearch={() => this.onPressSearchProduct()}
          onPressFilter={() => this.onPressFilterProduct()}
        />

        <View style={productStyles.floatButton}>
          <TouchableOpacity
            style={circleButtonStyles.circleButton}
            onPress={() => this.props.navigation.navigate('ProductCreate')}>
            <Icon name="ios-add" size={34} color={colorStyles.white} />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}
export default Product;
