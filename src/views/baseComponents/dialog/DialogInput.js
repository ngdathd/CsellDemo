import React, { Component } from 'react';

import ButtonInDialog from './ButtonInDialog';
import ContainerInDialog from './ContainerInDialog';
import DescriptionInDialog from './DescriptionInDialog';
import InputInDialog from './InputInDialog';
import TitleInDialog from './TitleInDialog';

export default class DialogInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: '',
            description: '',
            actionInputs: [
                {
                    label: '',
                    placeholder: '',
                    defaultValue: '',
                    secureTextEntry: false,

                    numberOfLines: 1,
                    keyboardType: 'default',
                    maxLength: null,

                    onChangeText: null,
                    onSubmitEditing: null,

                    returnKeyType: 'done',
                    inputRef: null,
                },
            ],
            actionButtons: [
                {
                    label: '',
                    color: '#007ff9',
                    onPress: null,
                },
            ],
        };

        global.dialogInputContext = this;
    }

    render() {
        return (
            <ContainerInDialog visible={this.state.show}>
                <TitleInDialog>{this.state.title}</TitleInDialog>

                <DescriptionInDialog>{this.state.description} </DescriptionInDialog>

                {this.state.actionInputs.map(v => {
                    return (
                        <InputInDialog
                            label={v.label}
                            placeholder={v.placeholder}
                            defaultValue={v.defaultValue}
                            secureTextEntry={v.secureTextEntry}
                            numberOfLines={v.numberOfLines}
                            maxLength={v.maxLength}
                            keyboardType={v.keyboardType}
                            onChangeText={text => {
                                v.onChangeText(text);
                            }}
                            onSubmitEditing={event => {
                                v.onSubmitEditing(event);
                            }}
                            returnKeyType={v.returnKeyType}
                            textInputRef={v.inputRef}
                        />
                    );
                })}

                {this.state.actionButtons.map(v => {
                    return (
                        <ButtonInDialog
                            label={v.label}
                            color={v.color}
                            onPress={() => {
                                this.setState({ show: false }, v.onPress);
                            }}
                        />
                    );
                })}
            </ContainerInDialog>
        );
    }
}
