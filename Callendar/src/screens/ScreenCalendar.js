import React from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../components/Button';
import DatePicker from '../components/DatePicker';

const ScreenCalendar = () => (
    <ScrollView style={{ flex: 1 }}>
        <DatePicker />
        <Button buttonText={'Search'} buttonAction={() => Actions.search()} />
    </ScrollView>
);

export default ScreenCalendar;
