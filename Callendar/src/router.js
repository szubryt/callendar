/* eslint-disable arrow-body-style */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ScreenCalendar from './screens/ScreenCalendar';
import ScreenSearch from './screens/ScreenSearch';
import Editor from './components/Editor';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene
          key='calendar'
          component={ScreenCalendar}
          title='Calendar'
          initial
          hideNavBar
        />
        <Scene key='search' hideNavBar component={ScreenSearch} title='Search notes' />
        <Scene key='editor' hideNavBar component={Editor} title='Edit note' />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
