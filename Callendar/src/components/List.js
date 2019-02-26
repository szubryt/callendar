/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Note from './Note';

class List extends Component {
  state = { notes: [] };
    componentWillMount() {
    axios
      .get('http://localhost:8081/people.json')
      .then(response => 
        this.setState({ notes: response.data.results }));
  }

  renderNotes(value) {
    return this.state.notes.map(note => {
      const sample = value.toLowerCase();
      let noteName = note.name;
      noteName = noteName.toLowerCase();
      if (noteName.includes(sample)) {
        //console.log(this.state.notes.indexOf(note));
        return (
          <Note
            noteID={this.state.notes.indexOf(note)}
            key={note.name}
            note={note}
            title={note.name}
            eDate={note.edited}
            eHeight={note.height}
            eEyeColor={note.eye_color}

          />     
          );    
      }
      return null;
    });
  }

  render() {
    //console.log('state.notes: ', this.state.notes);
    return <View>{this.renderNotes(this.props.text)}</View>;
  }
}

export default List;
