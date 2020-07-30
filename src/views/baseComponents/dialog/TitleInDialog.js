import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

export default class TitleInDialog extends Component {
    static propTypes = {
        ...Text.propTypes,
        style: PropTypes.any,
        children: PropTypes.string.isRequired,
    };

    static displayName = 'TitleInDialog';

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
            color: 'black',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '600',
        },
        android: {
            color: 'black',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 'bold',
        },
        web: {
            fontWeight: '500',
            fontSize: 18,
        },
    }),
});
