import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkUserStatusSection } from '../stores/actions';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RootLoading } from './components';
import Splash from './pages/Splash';
import Login from './pages/Login';

import Product from './pages/Product';
import Customer from './pages/Customer';
import Social from './pages/Social';
import Friend from './pages/Friend';
import Notification from './pages/Notification';

import About from './pages/About';

import ProductDetail from './pages/ProductDetail';
import ProductCreate from './pages/ProductCreate';

import CustomerDetail from './pages/CustomerDetail';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { colorStyles } from '../styles/components';
import { bindActionCreators } from 'redux';

import messaging from '@react-native-firebase/messaging';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Alert, Platform } from 'react-native';
import DialogInput from './baseComponents/dialog/DialogInput';

// Register background handler
messaging().setBackgroundMessageHandler(async (remoteMessage) => {
    console.log('Message handled in the background!', remoteMessage);
});

const Tab = createBottomTabNavigator();
function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    switch (route.name) {
                        case 'Product': {
                            iconName = focused ? 'folder' : 'folder-open';
                            break;
                        }
                        case 'Customer': {
                            iconName = focused ? 'contacts' : 'contacts';
                            break;
                        }
                        case 'Social': {
                            iconName = focused ? 'home' : 'home';
                            break;
                        }
                        case 'Friend': {
                            iconName = focused ? 'people' : 'people-outline';
                            break;
                        }
                        case 'Notification': {
                            iconName = focused ? 'notifications' : 'notifications-none';
                            break;
                        }
                    }

                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: colorStyles.colorPrimary,
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Product" component={Product} />
            <Tab.Screen name="Customer" component={Customer} />
            <Tab.Screen name="Social" component={Social} />
            <Tab.Screen name="Friend" component={Friend} />
            <Tab.Screen name="Notification" component={Notification} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();
function MainStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="BottomTab" component={BottomTab} />
            <Stack.Screen name="ProductDetail" component={ProductDetail} />
            <Stack.Screen name="ProductCreate" component={ProductCreate} />
            <Stack.Screen name="CustomerDetail" component={CustomerDetail} />
        </Stack.Navigator>
    );
}

const Drawer = createDrawerNavigator();
function LeftDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Main" component={MainStack} />
            <Drawer.Screen name="About" component={About} />
        </Drawer.Navigator>
    );
}

class Routes extends Component {
    render() {
        if (this.props.isSplash) {
            return <Splash />;
        } else {
            if (this.props.isLogin) {
                return (
                    <>
                        <Login />
                        <DialogInput />
                        <RootLoading />
                    </>
                );
            } else {
                return (
                    <>
                        <NavigationContainer>
                            <LeftDrawer />
                        </NavigationContainer>
                        <DialogInput />
                        <RootLoading />
                    </>
                );
            }
        }
    }

    addNoti(remoteMessage) {
        console.log(remoteMessage);
        PushNotificationIOS.presentLocalNotification({
            alertBody: remoteMessage.notification.body,
            alertTitle: remoteMessage.notification.title,
            applicationIconBadgeNumber: 10,
        });
    }

    receiverForegroundStateMessages() {
        const unsubscribe = messaging().onMessage(async (remoteMessage) => {
            //   Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
            //   console.log(24123);
            this.addNoti(remoteMessage);
        });

        return unsubscribe;
    }

    componentDidMount() {
        this.props.checkUserStatusSection();
        this.receiverForegroundStateMessages();
    }
}

const mapStateToProps = ({ routesReducer }) => {
    return {
        isSplash: routesReducer.isSplash,
        isLogin: routesReducer.isLogin,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ checkUserStatusSection }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
