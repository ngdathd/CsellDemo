import React, {Component} from 'react';
import {Button} from 'react-native';
import {ToolbarComponent} from '../../components';
import PushNotificationIOS from "@react-native-community/push-notification-ios";

class Notification extends Component {

    addNoti(){
        PushNotificationIOS.presentLocalNotification({
            alertAction: 'yes',
            alertBody: "aaaaaa",
            alertTitle: "Dang Test",
            applicationIconBadgeNumber: 10,
        });
    }
  render() {
    return (
      <>
        <ToolbarComponent
          title="Notification"
          options={{
            title: true,
            buttonMenu: true,
            buttonSearch: false,
            buttonFilter: false,
          }}
        />
        <Button title="Add Noti" onPress={()=>this.addNoti()}/>
      </>
    );
  }
}

export default Notification;
