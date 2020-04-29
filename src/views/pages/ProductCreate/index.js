import React, {Component} from 'react';

import {ToolbarComponent} from '../../components';
import {Button, Input} from 'react-native-elements';
import {Picker} from '@react-native-community/picker';
import {View, ScrollView} from 'react-native';
import {productCreateStyles} from '../../../styles/pages';
import RadioForm from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Car', value: ['car', 'car_mercedes', 'car_mercedes_cclass']},
  {label: 'Land', value: ['land', 'land_house']},
  {label: 'Sim', value: ['sim', 'sim_data']},
];

class ProductCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: 'VND',
      name: '',
      price: '',
      address: '',
      note: '',
      category: ['car', 'car_mercedes', 'car_mercedes_cclass'],
    };
  }

  onPressBack() {
    this.props.navigation.goBack();
  }

  onPressCreateProduct() {
    let newProduct = {};
    newProduct.name = this.state.name;
    newProduct.address = this.state.address;
    newProduct.categories = this.state.category;
    newProduct.price = this.state.price;
    newProduct.currency = this.state.currency;
    newProduct.note = this.state.note;

    let attributes = {};
    attributes.address = this.state.address;
    newProduct.attributes = attributes;

    // console.log(newProduct);

    fetch('https://api.csell.vn/api/v1/products', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzYsInBob25lIjoiKzg0MjE3MTk5NzExIiwiZW1haWwiOm51bGwsIm5hbWUiOiJkYXQgMjE3IiwiYXZhdGFyIjoiaHR0cHM6Ly9jZG4uY3NlbGwuY29tL3VwbG9hZC9kZWZhdWx0L2F2YXRhci1kZWZhdWx0LmpwZyIsImdyb3VwIjoidXNlciIsImV4cCI6MTU4ODIyMTM4OSwiaWF0IjoxNTg4MTM0OTg5LCJhdWQiOiJ3ZWIiLCJpc3MiOiJhdXRoLmNzZWxsLnZuL3VzZXIvd2ViIn0.IzUlqGxb_QRmrWtbFa9SP8_t1mMbIqQ74fmow_bSWMIX-hDBxAOmSEyOU2Go4ygj7BWYVKhFsULBmazBgRwCY0h_o50pO2SyUS7ln_3e2E04z623GgWOMUsIanFNCLhE7uo2QqKmP8bjDN4QHgY8037-tWJogCZX76kxt7ZR7RJ2I5dR9kyyVZtNtSZ7q_Wk-Wq72Y1IjkgcwwlDDvmvVtCD7-hVvnrfgCmhqANiaqJ6dkCCDbLLd2gb0ZLluHSGs42gQg3wPU6DcAzBclo3sfU02KQVJEAK-vt0bEFwdyy8fRAkkf7ovgxW1fOfWjY6rp7btJb9BpR6N_ysa52CyA',
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <>
        <ToolbarComponent
          title="ProductCreate"
          options={{
            title: true,
            buttonMenu: false,
            buttonBack: true,
            buttonSearch: false,
            buttonFilter: false,
          }}
          onPressBack={() => this.onPressBack()}
        />

        <View style={productCreateStyles.container}>
          <ScrollView>
            <View style={productCreateStyles.containerInput}>
              <Input
                containerStyle={productCreateStyles.inputStyles}
                placeholder="Name"
                blurOnSubmit={false}
                returnKeyType={'next'}
                autoCapitalize="words"
                onChangeText={(name) => this.setState({name})}
              />

              <View style={productCreateStyles.containerPhoneStyles}>
                <Input
                  containerStyle={productCreateStyles.inputPhoneStyles}
                  placeholder="Price"
                  blurOnSubmit={false}
                  returnKeyType={'next'}
                  keyboardType="decimal-pad"
                  onChangeText={(price) => this.setState({price})}
                />
                <Picker
                  mode="dropdown"
                  style={productCreateStyles.containerPicker}
                  selectedValue={this.state.currency}
                  onValueChange={(itemValue, _itemIndex) =>
                    this.setState({currency: itemValue})
                  }>
                  <Picker.Item label="VND" value="VND" />
                  <Picker.Item label="USD" value="USD" />
                </Picker>
              </View>

              <Input
                blurOnSubmit={false}
                returnKeyType={'next'}
                placeholder="Address"
                autoCapitalize="sentences"
                containerStyle={productCreateStyles.inputStyles}
                onChangeText={(address) => this.setState({address})}
              />

              <Input
                multiline={true}
                placeholder="Note"
                autoCapitalize="sentences"
                containerStyle={productCreateStyles.inputStyles}
                onChangeText={(note) => this.setState({note})}
              />

              <RadioForm
                style={productCreateStyles.containerButtonStyles}
                radio_props={radio_props}
                initial={0}
                onPress={(value) => {
                  this.setState({category: value});
                }}
              />
            </View>
          </ScrollView>

          <Button
            containerStyle={productCreateStyles.containerButtonStyles}
            buttonStyle={productCreateStyles.buttonStyles}
            title="Create Product"
            loading={false}
            onPress={() => this.onPressCreateProduct()}
          />
        </View>
      </>
    );
  }
}

export default ProductCreate;
