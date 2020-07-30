import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';

export default class InputInDialog extends Component {
    static propTypes = {
        ...TextInput.propTypes,
        label: PropTypes.string,
        style: PropTypes.any,
        textInputRef: PropTypes.any,
        wrapperStyle: PropTypes.any,
        numberOfLines: PropTypes.number,
        multiline: PropTypes.bool,
    };

    static displayName = 'InputInDialog';

    render() {
        const {
            label,
            style,
            wrapperStyle,
            textInputRef,
            multiline,
            numberOfLines,
            ...otherProps
        } = this.props;
        const lines = (multiline && numberOfLines) || 1;
        const height = 18 + Platform.select({ ios: 14, android: 22 }) * lines;
        return (
            <View style={[styles.textInputWrapper, wrapperStyle]}>
                {label && <Text style={styles.label}>{label}</Text>}
                <TextInput
                    ref={textInputRef}
                    style={[styles.textInput, style, { height }]}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    {...otherProps}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputWrapper: Platform.select({
        ios: {
            backgroundColor: 'white',
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 6,
            borderColor: '#A9ADAE',
            marginHorizontal: 20,
            marginBottom: 16,
            paddingHorizontal: 8,
        },
        android: {
            backgroundColor: 'white',
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 6,
            borderColor: '#A9ADAE',
            marginHorizontal: 20,
            marginBottom: 16,
            paddingHorizontal: 8,
        },
    }),
    label: Platform.select({
        ios: { marginTop: 4 },
        android: {
            color: 'rgba(0, 0, 0, 0.5)',
            fontSize: 14,
            marginTop: 4,
        },
    }),
    textInput: Platform.select({
        ios: {},
        android: {
            marginLeft: -4,
            paddingLeft: 4,
        },
    }),
});
