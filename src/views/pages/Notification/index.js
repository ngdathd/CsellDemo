import React, {Component} from 'react';

import {ToolbarComponent} from '../../components';

class Notification extends Component {
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
      </>
    );
  }
}

export default Notification;
