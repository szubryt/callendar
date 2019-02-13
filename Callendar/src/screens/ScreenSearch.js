import React from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Button from '../components/Button';
import List from '../components/List';
import Search from '../components/Search';

const ScreenCalendar = () => (
    
    <ScrollView style={{ flex: 1 }}>
        <Search />
        <Button buttonText={'Go back to Calendar'} buttonAction={() => Actions.calendar()} />
        <List />   
    </ScrollView>
);

export default ScreenCalendar;
