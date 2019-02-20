import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import Button from './Button';

class Editor extends Component {
  render() {
    const { containerStyle } = styles;
    const { textStyle } = styles;
    return (
      <View>
        <Text style={textStyle} >Name</Text>
        <TextInput 
        placeholder={this.props.text} 
        style={containerStyle}
        />
        <Text style={textStyle} >Description</Text>
        <TextInput
        placeholder={'Description'} 
        style={containerStyle}
        multiline={true}
        />
        <Button buttonText={'Save'} />
      </View>
    );
  }
}

const styles = {
    textStyle: {
      fontSize: 18,
      fontWeight: '600',
      paddingLeft: 10,
      paddingTop: 10,
      paddingBottom: 10
    },
  
    containerStyle: {
      padding: 10,
      marginTop: 5,
      marginBottom: 5,
      alignSelf: 'stretch',
      backgroundColor: 'white',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'grey',
      marginLeft: 10,
      marginRight: 10
    },
  };

export default Editor;
