import React, { Component } from 'react';
import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';

class DatePicker extends Component {
  render() {
    return (
      <View>
        <Calendar />
      </View>
    );
  }
}

export default DatePicker;
