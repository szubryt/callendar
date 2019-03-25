import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableOpacity } from 'react-native';

class Note extends Component {
  render() {
    const { textStyle } = styles;
    const { containerStyle } = styles;

    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={() =>
          Actions.editor({
            title: this.props.title,
            eDate: this.props.eDate,
            eHeight: this.props.eHeight,
            eEyeColor: this.props.eEyeColor,
            eNote: this.props.note,
            eID: this.props.noteID
          })
        }
      >
        <Text style={textStyle}>{this.props.note.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },

  containerStyle: {
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

export default Note;