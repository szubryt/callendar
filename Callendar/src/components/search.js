import React, { Component } from 'react';
import { TextInput } from 'react-native';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = { text: 'Type here' };
      }
      
      render() {
        const { searchStyle } = styles;
        const { textStyle } = styles;

        return (
          <TextInput
          style={[searchStyle, textStyle]}
            onChangeText={
                (text) => {
                    this.setState({ text });
                    console.log('text', text);
                    return text;
                }
            }
            value={this.state.text}
          />
        );
      }
}

const styles = {
    textStyle: {
        textAlign: 'center',
        fontSize: 18,
        color: 'grey',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10 
    },

    searchStyle: {
        flex: 1,
        marginTop: 10,
        marginBottom: 5, 
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        marginLeft: 10,
        marginRight: 10
    }
};

export default Search;
