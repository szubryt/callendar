import React, { Component } from 'react';
import { TextInput, View, Text, Alert, DatePickerAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';
import axios from 'axios';
import Button from './Button';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eName: this.props.title,
      eDate: this.props.eDate,
      eHeight: this.props.eHeight,
      eEyeColor: this.props.eEyeColor,
      eDescription: '',
      setMonth: '',
      setDay: '',
      setYear: ''
    };
  }

  saveData = () => {
    console.log('-----------------------------------------------');
    axios
      .patch(
        `https://logowaniegfp.firebaseio.com/results/${this.props.eID}.json`,
        {
          name: this.state.eName,
          height: this.state.eHeight,
          eye_color: this.state.eEyeColor,
          edited: this.state.eDate
        }
      )
      .then(response => {
        console.log('POST response: ', response);
        Alert.alert('Changes succesfuly saved');
        Actions.search();
      })
      .catch(error => {
        if (error.response) {
          console.log('R Data: ', error.response.data);
          console.log('R Headers: ', error.response.headers);
          Alert.alert('Try again');
        } else if (error.request) {
          console.log('R request: ', error.request);
          Alert.alert('Try again');
        } else {
          console.log('Error message: ', error.message);
          Alert.alert('Try again');
        }
        console.log(error.config);
      });
  };

  addZero(n) {
    return (n < 10 ? '0' : '') + n;
  }

  render() {
    const { containerStyle } = styles;
    const { textStyle } = styles;
    return (
      <View>
        <Text style={textStyle}>{this.props.eID}. Name</Text>
        <TextInput
          style={containerStyle}
          onChangeText={eName => this.setState({ eName })}
          value={this.state.eName}
        />
        <Text style={textStyle}>Date</Text>
        <Button
          style={{ color: 'blue' }}
          buttonAction={async () => {
            try {
              // eslint-disable-next-line prefer-const
              let { action, year, month, day } = await DatePickerAndroid.open({
                mode: 'calendar',
                date: new Date()
              });
              if (action !== DatePickerAndroid.dismissedAction) {
                month = this.addZero(month + 1);
                day = this.addZero(day);
                this.setState({
                  setMonth: month.toString(),
                  setDay: day.toString(),
                  setYear: year.toString(),
                  eDate: `${year}-${month}-${day}`
                });
              }
            } catch ({ code, message }) {
              console.warn('Cannot open date picker', message);
            }
          }}
          buttonText={this.state.eDate}
          style={containerStyle}
          onChangeText={eDate => this.setState({ eDate })}
        />
        <Text style={textStyle}>Height</Text>
        <TextInput
          placeholder={this.props.eHeight}
          style={containerStyle}
          onChangeText={eHeight => this.setState({ eHeight })}
          keyboardType={'number-pad'}
        />
        <Text style={textStyle}>Eye color</Text>
        <TextInput
          placeholder={this.props.eEyeColor}
          style={containerStyle}
          onChangeText={eEyeColor => this.setState({ eEyeColor })}
        />
        <Button
          buttonText={'Save'}
          buttonAction={() => {
            this.saveData();
            console.log('day: ', this.state.setDay);
            console.log('month: ', this.state.setMonth);
            console.log('year: ', this.state.setYear);
          }}
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
