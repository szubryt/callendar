import React, { Component } from 'react';
import { TextInput, View, Text } from 'react-native';
import Button from './Button';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eName: this.props.title,
      eDate: '',
      eHeight: '',
      eEyeColor: '',
      eDescription: ''
    };
  }

  render() {
    const { containerStyle } = styles;
    const { textStyle } = styles;
    return (
      <View>
        <Text style={textStyle}>{this.props.eID}. Name</Text>
        <TextInput
          placeholder={this.props.title}
          style={containerStyle}
          onChangeText={eName => this.setState({ eName })}
        />
        <Text style={textStyle}>Date</Text>
        <TextInput
          placeholder={this.props.eDate}
          style={containerStyle}
          onChangeText={eDate => this.setState({ eDate })}
        />
        <Text style={textStyle}>Height</Text>
        <TextInput
          placeholder={this.props.eHeight}
          style={containerStyle}
          onChangeText={eHeight => this.setState({ eHeight })}
        />
        <Text style={textStyle}>Eye color</Text>
        <TextInput
          placeholder={this.props.eEyeColor}
          style={containerStyle}
          onChangeText={eEyeColor => this.setState({ eEyeColor })}
        />
        <Button 
        buttonText={'Save'} 
        />
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
  }
};

export default Editor;
