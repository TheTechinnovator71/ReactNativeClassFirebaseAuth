import React from 'react';
import { Text, View } from 'react-native';

export const Header = () => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Authentication</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 75,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: .2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
}

