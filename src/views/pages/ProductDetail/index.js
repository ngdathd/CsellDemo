import React, {Component} from 'react';

import {ToolbarComponent} from '../../components';
class ProductDetail extends Component {
  render() {
    return (
      <>
        <ToolbarComponent
          title="ProductDetail"
          options={{
            title: true,
            buttonMenu: false,
            buttonSearch: false,
            buttonFilter: false,
          }}
        />
      </>
    );
  }
}

export default ProductDetail;
