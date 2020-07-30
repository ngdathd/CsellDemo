import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

export default class DescriptionInDialog extends Component {
    static propTypes = {
        ...Text.propTypes,
        style: PropTypes.any,
        children: PropTypes.string.isRequired,
    };

    static displayName = 'DescriptionInDialog';

    render() {
        const { style, children, ...otherProps } = this.props;
        return (
            <Text style={[styles.text, style]} {...otherProps}>
                {children}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    text: Platform.select({
        ios: {
            textAlign: 'center',
            color: 'black',
            fontSize: 13,
            marginTop: 4,
        },
        android: {
            textAlign: 'center',
            color: 'black',
            fontSize: 13,
            marginTop: 4,
        },
    }),
});
