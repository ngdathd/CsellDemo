import React, {Component} from 'react';

import {ToolbarComponent, CustomerItemComponent} from '../../components';
import {FlatList} from 'react-native';

class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      refreshing: false,
      seed: 0,
      data: [],
      error: null,
    };
  }

  onPressMenu() {
    this.props.navigation.openDrawer();
  }

  onPressSearchCustomer() {
    console.log('onPressSearchCustomer');
  }

  onPressFilterCustomer() {
    console.log('onPressFilterCustomer');
  }

  onPressItem(item) {
    this.props.navigation.navigate('CustomerDetail', {
      title: item.name.first,
      description: item.email,
      image_url: item.picture.thumbnail,
    });
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest() {
    const {seed} = this.state;
    const page = 0;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          loading: false,
          refreshing: false,
          data: [...this.state.data, ...resJson.results],
          error: resJson.error || null,
        });
      })
      .catch((error) => {
        this.setState({
          loading: false,
          refreshing: false,
          error: error || null,
        });
      });
  }

  handleRefresh() {
    this.setState(
      {
        seed: 0,
        refreshing: true,
        data: [],
      },
      function () {
        this.makeRemoteRequest();
      },
    );
  }

  handleLoadMore() {
    this.setState(
      {
        seed: this.state.seed + 20,
        loading: true,
      },
      function () {
        this.makeRemoteRequest();
      },
    );
  }
  render() {
    return (
      <>
        <ToolbarComponent
          title="Customer"
          options={{
            title: true,
            buttonMenu: true,
            buttonSearch: true,
            buttonFilter: false,
          }}
          onPressMenu={() => this.onPressMenu()}
          onPressSearch={() => this.onPressSearchCustomer()}
          onPressFilter={() => this.onPressFilterCustomer()}
        />

        <FlatList
          data={this.state.data}
          renderItem={({item}) => (
            <CustomerItemComponent
              onPressItem={() => this.onPressItem(item)}
              title={item.name.first}
              description={item.email}
              image_url={item.picture.thumbnail}
            />
          )}
          keyExtractor={(item) => item.email}
          onRefresh={() => this.handleRefresh()}
          refreshing={this.state.refreshing}
          onEndReached={() => this.handleLoadMore()}
          onEndReachedThreshold={1}
        />
      </>
    );
  }
}

export default Customer;
