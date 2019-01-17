import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
    const { textStyle, viewStyle } = styles;

    // Hardcoded for now but will be changed
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Calendar</Text>
        </View>
    );
};

const styles = {

    viewStyle: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
        elevation: 2,
        position: 'relative'

    },

    textStyle: {
        fontSize: 30
    
    }
};


export default Header;
