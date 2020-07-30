import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';

const COLOR = '#007ff9';

export default class ButtonInDialog extends Component {
    static propTypes = {
        ...Text.propTypes,
        label: PropTypes.string.isRequired,
        color: PropTypes.string,
        bold: PropTypes.bool,
        disabled: PropTypes.bool,
        onPress: PropTypes.func.isRequired,
    };

    static defaultProps = {
        color: COLOR,
        disabled: false,
    };

    static displayName = 'ButtonInDialog';

    render() {
        const {
            label,
            color,
            disabled,
            bold,
            onPress,
            style,
            ...otherProps
        } = this.props;
        const fontWeight = bold ? '600' : 'normal';
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
                disabled={disabled}>
                <Text
                    style={[styles.text, { color: color, fontWeight: fontWeight }, style]}
                    {...otherProps}>
                    {label}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: Platform.select({
        ios: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        android: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    }),
    text: Platform.select({
        ios: {
            textAlign: 'center',
            fontSize: 17,
            backgroundColor: 'transparent',
        },
        android: {
            textAlign: 'center',
            fontSize: 17,
            backgroundColor: 'transparent',
        },
    }),
});
