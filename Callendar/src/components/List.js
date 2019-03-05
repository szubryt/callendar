/* eslint-disable arrow-body-style */
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import axios from 'axios';
//import firebase from 'firebase';
import Note from './Note';

class List extends Component {
  state = { 
    notes: [],
    patchName: '',
    patchDate: '',
    patchHeight: '',
    patchEyeColor: '',
    patchID: '5'
  };

    componentWillMount() {
    axios
      .get('https://logowaniegfp.firebaseio.com/results.json')
      .then(response => 
        this.setState({ notes: response.data }))
        .catch(error => {
          if (error.response) {
            console.log('R Data: ', error.response.data);
            console.log('R Status: ', error.response.status);
            console.log('R Headers: ', error.response.headers);
          } else if (error.request) {
            console.log('R request: ', error.request);
          } else {
            console.log('Error message: ', error.message);
          }
          console.log(error.config);
        });
  }

  saveData() {
  console.log('-----------------------------------------------');
    axios
    .patch('https://logowaniegfp.firebaseio.com/results/' + this.state.patchID + '.json', {
      name: this.state.patchName,
      height: this.state.patchHeight,
      eye_color: this.state.patchEyeColor,
      edited: this.state.patchDate
    })
    .then(response => console.log('POST response: ', response))
    .catch(error => {
      if (error.response) {
        console.log('R Data: ', error.response.data);
        console.log('R Status: ', error.response.status);
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
          />    
          );    
      }
      return null;
    });
  }

  render() {
    return (
      <View>
    {this.renderNotes(this.props.text)}
    <Button 
    title='simple'   
    onPress={() => {
      this.saveData();
      this.renderNotes(this.props.text);
    }} 
    />
    </View>
    );
  }
}

export default List;
