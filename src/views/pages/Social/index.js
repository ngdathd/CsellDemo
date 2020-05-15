import React, {Component} from 'react';
import {ToolbarComponent} from '../../components';

import {Button, Text} from 'react-native';
import Utilities from '../../../utils/Utilities';

class Social extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countChangeLanguage: 0,
    };
  }
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
        <Text>{global.language.language}</Text>
        <Button
          title="Doi ngon ngu"
          onPress={() => {
            // console.log(this.state.countChangeLanguage);

            this.setState({
              countChangeLanguage: this.state.countChangeLanguage + 1,
            });
            if (this.state.countChangeLanguage % 2 === 0) {
              Utilities.onChangeLanguage('en');
            } else {
              Utilities.onChangeLanguage('vi');
            }
            // console.log(this.state.countChangeLanguage);
          }}
        />
        <Text>{this.state.countChangeLanguage}</Text>
      </>
    );
  }
}

export default Social;
