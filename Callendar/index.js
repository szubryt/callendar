import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import Header from './src/components/header';
import Button from './src/components/Button';
import DatePicker from './src/components/DatePicker';

const App = () => (
    <ScrollView style={{ flex: 1 }}>
        <Header />
        <DatePicker />
        <Button />
    </ScrollView>
);

AppRegistry.registerComponent('Callendar', () => App);
