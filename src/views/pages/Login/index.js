import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';

import { loginStyles } from '../../../styles/pages';
import Utilities from '../../../utils/Utilities';
import { connect } from 'react-redux';

import { loginAction } from '../../../stores/actions';
import { bindActionCreators } from 'redux';

class Login extends Component {
    constructor(props) {
        super(props);
        this.mapLoginObj = {};

        this.inputPassword = React.createRef();
        this.mapDialogInput = {};
    }

    handleDialogInputValue(key, value) {
        this.mapDialogInput[key] = value;
    }

    handleLoginInDialogInput() {
        alert(JSON.stringify(this.mapDialogInput));
    }

    dialogInputAction = () => {
        this.mapDialogInput.username = 'Nguoi dung hien tai';

        let arrInput = [
            {
                //   label: 'Username',
                placeholder: 'Ten dang nhap',
                defaultValue: this.mapDialogInput.username,
                onSubmitEditing: event => {
                    console.log(
                        event.nativeEvent.text + '><' + this.mapDialogInput.username,
                    );
                    this.input2.focus();
                },
                onChangeText: text => {
                    this.handleDialogInputValue('username', text);
                },
                returnKeyType: 'next',
            },
            {
                //   label: 'Phone',
                placeholder: 'So dien thoai',
                keyboardType: 'phone-pad',
                maxLength: 11,
                onSubmitEditing: event => {
                    console.log(
                        event.nativeEvent.text + '><' + this.mapDialogInput.phone,
                    );
                    this.input3.focus();
                },
                onChangeText: text => {
                    this.handleDialogInputValue('phone', text);
                },
                inputRef: input => (this.input2 = input),
                returnKeyType: 'next',
            },
            {
                //   label: 'Password',
                placeholder: 'Mat khau',
                secureTextEntry: true, //default la false
                onSubmitEditing: () => {
                    this.handleLoginInDialogInput();
                },
                onChangeText: text => {
                    this.handleDialogInputValue('password', text);
                },
                inputRef: input => (this.input3 = input),
                returnKeyType: 'done',
            },
        ];
        Utilities.showDialogInput(
            true,
            'Xac thuc',
            'Dang nhap de tiep tuc!',
            arrInput,
            [
                {
                    label: 'OK',
                    color: '#007ff9',
                    onPress: () => {
                        this.handleLoginInDialogInput();
                        this.mapDialogInput = {};
                    },
                },
                {
                    label: 'Cancle',
                    color: '#ff3b30',
                    onPress: () => {
                        this.mapDialogInput = {};
                    },
                },
            ],
        );
    };

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
        console.log(22222);
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
                        leftIcon={{ type: 'font-awesome', name: 'phone' }}
                        leftIconContainerStyle={loginStyles.iconInput}
                        onChangeText={(text) => this.handleValue('username', text)}
                    />

                    <Input
                        numberOfLines={1}
                        leftIcon={{ type: 'font-awesome', name: 'lock' }}
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
                    // onPress={() => this.handleLogin()}
                    onPress={this.dialogInputAction}
                >
                    <Text style={loginStyles.textLogin}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}

const mapStateToProps = ({ loginReducer }) => {
    return {
        message: loginReducer.message,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loginAction }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
