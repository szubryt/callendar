import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Button from '../components/Button';
import List from '../components/List';
import Search from '../components/Search';


class ScreenSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onChangeText(newText) {
    this.setState({
      text: newText
    });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Search changeText={this.onChangeText.bind(this)} />
        <List text={this.state.text} />
        <Button buttonText={'Back to calendar'} buttonAction={() => Actions.calendar()} />
      </ScrollView>
    );
  }
}

export default ScreenSearch;
