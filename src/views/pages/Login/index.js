import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';

import {loginStyles} from '../../../styles/pages';

class Login extends Component {
  _handleLogin() {}

  render() {
    return (
      <ScrollView>
        <View style={loginStyles.txtHeaderLogin}>
          <Text style={loginStyles.textHello1}>Chào mừng trở lại,</Text>
          <Text style={loginStyles.textHello2}>
            đăng nhập để tiếp tục{'\n'}sử dụng Csell
          </Text>
        </View>
        <View style={loginStyles.containerFormInput}>
          <Input
            numberOfLines={1}
            keyboardType="numeric"
            placeholder="Số điện thoại"
            leftIcon={{type: 'font-awesome', name: 'phone'}}
            leftIconContainerStyle={loginStyles.iconInput}
          />

          <Input
            numberOfLines={1}
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            leftIconContainerStyle={loginStyles.iconInput}
            placeholder="Mật khẩu"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={loginStyles.buttonLogin}
          onPress={() => this._handleLogin()}>
          <Text style={loginStyles.textLogin}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default Login;
