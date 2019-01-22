import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
const { bStyle } = styles;
const { tStyle } = styles;

    return (
        <TouchableOpacity 
            style={bStyle}
            onPress={props.buttonAction} 
        >
            <Text style={tStyle}>{props.buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    tStyle: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10 
    },

    bStyle: {
        marginTop: 30,
        marginBottom: 30, 
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginLeft: 10,
        marginRight: 10
    }
};


export default Button;
