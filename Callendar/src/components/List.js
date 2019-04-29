/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Note from './Note';

class List extends Component {
  state = {
    notes: []
  };

  componentWillMount() {
    this.getData();
  }

  getData() {
    axios
      .get('https://logowaniegfp.firebaseio.com/results.json')
      .then(response => this.setState({ notes: response.data }))
      .catch(error => {
        if (error.response) {
          console.log('R Data: ', error.response.data);
          console.log('R Headers: ', error.response.headers);
        } else if (error.request) {
          console.log('R request: ', error.request);
        } else {
          console.log('Error message: ', error.message);
        }
        console.log(error.config);
      });
  }

  renderNotes(value) {
    return this.state.notes.map(note => {
      const sample = value.toLowerCase();
      let noteName = note.name;
      noteName = noteName.toLowerCase();
      if (noteName.includes(sample)) {
        return (
          <Note
            noteID={this.state.notes.indexOf(note)}
            key={this.state.notes.indexOf(note)}
            note={note}
            title={note.name}
            eDate={note.edited}
            eHeight={note.height}
            eEyeColor={note.eye_color}
            jsonData={this.state.notes}
          />
        );
      }
      return null;
    });
  }

  render() {
    return <View>{this.renderNotes(this.props.text)}</View>;
  }
}

export default List;
