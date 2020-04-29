import React, {Component} from 'react';

import {ToolbarComponent} from '../../components';
class Social extends Component {
  render() {
    return (
      <>
        <ToolbarComponent
          title="Social"
          options={{
            title: true,
            buttonMenu: true,
            buttonSearch: true,
            buttonFilter: true,
          }}
        />
      </>
    );
  }
}

export default Social;
