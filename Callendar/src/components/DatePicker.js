import React, { Component } from 'react';
import axios from 'axios';
import { Agenda } from 'react-native-calendars';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { blue } from 'ansi-colors';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      notes: []
    };
  }

    componentDidMount() {
    axios
      .get('https://logowaniegfp.firebaseio.com/results.json')
      .then(response => {
        this.setState({ notes: response.data });
        this.markDates();
      })
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
      //
        console.log(error.config);
      });
    }

    markDates() {
    return (
      this.state.notes.map(
        note => {
          if (!this.state.items[note.edited]) {
            this.state.items[note.edited] = 
            [{
              name: note.name,
              date: note.edited,
              eye: note.eye_color
            }];
          } else {
            this.state.items[note.edited].push({
            name: note.name,
            date: note.edited,
            eye: note.eye_color
          });
        }
            return this.state.items;
          }       
      )
    );
  }
  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        // eslint-disable-next-line no-mixed-operators
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
        }
      }
      const newItems = {};
      Object.keys(this.state.items).forEach(key => { newItems[key] = this.state.items[key]; });
      this.setState({
        items: newItems
      });
      }, 1000);      
      this.setState(this.state);
    }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
      <View
  style={{
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '95%'
  }}
      />
      </View>
    );
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}><Text>{item.name}</Text></View>
    );
  }

  render() {
      return (
      <Agenda
        items={this.state.items}
        loadItemsForMonth={this.loadItems.bind(this)}
        onCalendarToggled={calendarOpened => {
          console.log(calendarOpened);
        }}
        onDayPress={day => {
          console.log('day pressed', day);
        }}
        onDayChange={day => {
          console.log('day changed', day);
        }}
        pastScrollRange={50}
        futureScrollRange={50}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        renderItem={this.renderItem.bind(this)}
        style={{
          height: '100%'
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  }
});

export default DatePicker;
