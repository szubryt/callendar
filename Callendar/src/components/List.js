import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Note from './Note';

class List extends Component {
    state = { notes: [] };

    componentWillMount() {
        axios.get('https://swapi.co/api/people/?format=json')
            .then(response => this.setState({ notes: response.data.results }));
    }

    renderNotes() {
        return this.state.notes.map(note => {
            return <Note key={note.name} note={note} />;
        });
    }

    render() {
        console.log(this.state);

        return (
            <View>
                {this.renderNotes()}
            </View>
        );
    }
}

export default List;
