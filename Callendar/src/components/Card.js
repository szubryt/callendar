import React from 'react';
import { Text, View } from 'react-native';

const Card = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.name}</Text>
      <Text style={textStyle}>{props.date}</Text>
      <Text style={textStyle}>{props.eye}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    //alignItems: 'center',
    height: 70,
    elevation: 2,
    position: 'relative',
    marginTop: 25,
    marginBottom: 5
  },

  textStyle: {
    fontSize: 15,
    
  }
};

export default Card;
