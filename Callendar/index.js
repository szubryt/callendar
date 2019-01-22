import React from 'react';
import { AppRegistry, ScrollView, Alert } from 'react-native';
import Header from './src/components/header';
import Button from './src/components/Button';
import DatePicker from './src/components/DatePicker';
import List from './src/components/List';

const App = () => (
    <ScrollView style={{ flex: 1 }}>
        <Header headerText={'My Calendar'} />
        <DatePicker />
        <Button buttonText={'Search'} buttonAction={() => Alert.alert('TO DO')} />
        <List />
    </ScrollView>
);

AppRegistry.registerComponent('Callendar', () => App);
