import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ScreenCalendar from './screens/ScreenCalendar';
import ScreenSearch from './screens/ScreenSearch';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="calendar" component={ScreenCalendar} title='Calendar' initial />
                <Scene key="search" component={ScreenSearch} title='Search notes' />
            </Scene>

        </Router>
    );
};

export default RouterComponent;
