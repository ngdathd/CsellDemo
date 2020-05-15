import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {Input} from 'react-native-elements';

import {loginStyles} from '../../../styles/pages';
import Utilities from '../../../utils/Utilities';
import {connect} from 'react-redux';

import {loginAction} from '../../../stores/actions';
import {bindActionCreators} from 'redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.mapLoginObj = {};

    this.inputPassword = React.createRef();
  }

  handleValue(key, value) {
    this.mapLoginObj[key] = value;
  }

  handleLogin() {
    try {
      Utilities.showHideRootLoading(true);
      this.props.loginAction(
        this.mapLoginObj.username,
        this.mapLoginObj.password,
      );
    } catch (error) {
      Utilities.logException('handleLogin', error);
    }
  }

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
            returnKeyType={'next'}
            onSubmitEditing={() => {
              this.inputPassword.current.focus();
            }}
            blurOnSubmit={false}
            leftIcon={{type: 'font-awesome', name: 'phone'}}
            leftIconContainerStyle={loginStyles.iconInput}
            onChangeText={(text) => this.handleValue('username', text)}
          />

          <Input
            numberOfLines={1}
            leftIcon={{type: 'font-awesome', name: 'lock'}}
            leftIconContainerStyle={loginStyles.iconInput}
            ref={this.inputPassword}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            onSubmitEditing={() => this.handleLogin()}
            onChangeText={(text) => this.handleValue('password', text)}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={loginStyles.buttonLogin}
          onPress={() => this.handleLogin()}>
          <Text style={loginStyles.textLogin}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({loginReducer}) => {
  return {
    message: loginReducer.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({loginAction}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
