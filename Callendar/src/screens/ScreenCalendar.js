import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../components/Button';
import DatePicker from '../components/DatePicker';

const ScreenCalendar = () => (
  <View 
  style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    backgroundColor: 'white',
    shadowTop: 2
  }}
  >  

  <View
  style={{
    backgroundColor: 'blue',
    height: '90%'
  }}
  >
  <DatePicker />
  </View>
  <View
  style={{}}
  >
  <Button buttonText={'Search'} buttonAction={() => Actions.search()} />
  </View>
  </View>
);

export default ScreenCalendar;
