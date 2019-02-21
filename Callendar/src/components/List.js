/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Note from './Note';

class List extends Component {
  state = { notes: [] };

  componentWillMount() {
    axios
      .get('https://swapi.co/api/people/?format=json')
      .then(response => this.setState({ notes: response.data.results }));
  }

  renderNotes(value) {
    return this.state.notes.map(note => {
      const sample = value.toLowerCase();
      let noteName = note.name;
      noteName = noteName.toLowerCase();
      if (noteName.includes(sample)) {
        return <Note key={note.name} note={note} title={note.name} />;
      }
      return null;
    });
  }

  render() {
    console.log(this.state);

    return <View>{this.renderNotes(this.props.text)}</View>;
  }
}

export default List;
