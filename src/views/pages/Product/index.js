import React, {Component} from 'react';

import {ToolbarComponent} from '../../components';
import {TouchableOpacity, View, Image, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {circleButtonStyles, colorStyles} from '../../../styles/components';
import {productStyles} from '../../../styles/pages';
import {serviceClient} from '../../../services';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {Constants} from '../../../stores/constants';
import {friendStyles} from '../../../styles/pages';

class Product extends Component {
  constructor(props) {
    super(props);

    const productList = [];

    this.state = {
      data: productList,
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(productList),
    };

    this.layoutProvider = new LayoutProvider(
      (i) => {
        // if (this.state.list.getDataForIndex(i).id % 2 === 0) {
        //   return 0;
        // } else {
        //   return 1;
        // }
        return 0;
      },
      (_type, dim) => {
        dim.width = Constants.SCREEN_WIDTH;
        dim.height = 100;
      },
    );
  }

  rowRenderer(type, data) {
    const {name, address} = data;
    // console.log('data');
    switch (type) {
      case 0: {
        return (
          <View style={friendStyles.listItem}>
            {/* <Image style={friendStyles.image} source={{uri: image}} /> */}
            <View style={friendStyles.body}>
              <Text style={friendStyles.nameRed}>{name}</Text>
              <Text style={friendStyles.description}>{address}</Text>
            </View>
          </View>
        );
      }
      case 1: {
        return (
          <View style={friendStyles.listItem}>
            {/* <Image style={friendStyles.image} source={{uri: image}} /> */}
            <View style={friendStyles.body}>
              <Text style={friendStyles.nameGreen}>{name}</Text>
              <Text style={friendStyles.description}>{address}</Text>
            </View>
          </View>
        );
      }
      case 2: {
        return (
          <View style={friendStyles.listItem}>
            {/* <Image style={friendStyles.image} source={{uri: image}} /> */}
            <View style={friendStyles.body}>
              <Text style={friendStyles.nameBlue}>{name}</Text>
              <Text style={friendStyles.description}>{address}</Text>
            </View>
          </View>
        );
      }
    }
  }

  onPressMenu() {
    this.props.navigation.openDrawer();
  }

  onPressSearchProduct() {
    console.log('onPressSearchProduct');
  }

  onPressFilterProduct() {
    console.log('onPressFilterProduct');
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest() {
    serviceClient
      .get('https://api.csell.vn/api/v1/products')
      .then((res) => {
        // console.log(res.data.data);
        let productList = [...this.state.data, ...res.data.data];
        this.setState({
          list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
            productList,
          ),
        });
      })
      .catch((error) => {});
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
        <RecyclerListView
          style={friendStyles.container}
          rowRenderer={this.rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProvider}
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
