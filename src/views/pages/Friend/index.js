import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import {ToolbarComponent} from '../../components';
import faker from 'faker';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import {friendStyles} from '../../../styles/pages';
import {Constants} from '../../../stores/constants';

class Friend extends Component {
  constructor(props) {
    super(props);

    const fakeData = [];

    for (let index = 0; index < 100; index++) {
      fakeData.push({
        id: index,
        image: faker.image.avatar(),
        name: faker.name.firstName(),
        description: faker.random.words(5),
      });
    }

    // console.log(fakeData[0]);

    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fakeData),
    };

    this.layoutProvider = new LayoutProvider(
      (i) => {
        return this.state.list.getDataForIndex(i).id % 3;
      },
      (_type, dim) => {
        dim.width = Constants.SCREEN_WIDTH;
        dim.height = 100;
      },
    );
  }

  rowRenderer(type, data) {
    const {image, name, description} = data;
    switch (type) {
      case 0: {
        return (
          <View style={friendStyles.listItem}>
            <Image style={friendStyles.image} source={{uri: image}} />
            <View style={friendStyles.body}>
              <Text style={friendStyles.nameRed}>{name}</Text>
              <Text style={friendStyles.description}>{description}</Text>
            </View>
          </View>
        );
      }
      case 1: {
        return (
          <View style={friendStyles.listItem}>
            <Image style={friendStyles.image} source={{uri: image}} />
            <View style={friendStyles.body}>
              <Text style={friendStyles.nameGreen}>{name}</Text>
              <Text style={friendStyles.description}>{description}</Text>
            </View>
          </View>
        );
      }
      case 2: {
        return (
          <View style={friendStyles.listItem}>
            <Image style={friendStyles.image} source={{uri: image}} />
            <View style={friendStyles.body}>
              <Text style={friendStyles.nameBlue}>{name}</Text>
              <Text style={friendStyles.description}>{description}</Text>
            </View>
          </View>
        );
      }
    }
  }

  onPressMenu() {
    this.props.navigation.openDrawer();
  }

  onPressSearchFriend() {
    console.log('onPressSearchFriend');
  }

  render() {
    return (
      <>
        <ToolbarComponent
          title="Friend"
          options={{
            title: true,
            buttonMenu: true,
            buttonSearch: true,
            buttonFilter: false,
          }}
          onPressMenu={() => this.onPressMenu()}
          onPressSearch={() => this.onPressSearchFriend()}
        />
        <RecyclerListView
          style={friendStyles.container}
          rowRenderer={this.rowRenderer}
          dataProvider={this.state.list}
          layoutProvider={this.layoutProvider}
        />
      </>
    );
  }
}

export default Friend;
