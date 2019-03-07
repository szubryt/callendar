import React, { Component } from 'react';
import axios from 'axios';
import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';

class DatePicker extends Component {
  state = { 
    notes: [],
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
        },
        );        
  }


  render() {
    return (
      <View>
        <Calendar />
        {
          console.log(this.state.notes)
        }
      </View>
    );
  }
}

export default DatePicker;
