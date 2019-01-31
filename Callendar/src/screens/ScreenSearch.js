import React from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../components/Button';
import List from '../components/List';

const ScreenCalendar = () => (
    <ScrollView style={{ flex: 1 }}>
        <Button buttonText={'Go back to Calendar'} buttonAction={() => Actions.calendar()} />
        <List />
    </ScrollView>
);

export default ScreenCalendar;
//AppRegistry.registerComponent('Callendar', () => App);
