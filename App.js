import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './components/Avatar';
import Constants from 'expo-constants';
import AuthorRow from './components/AuthorRow';
import Card from './components/Card';
import CardList from './components/CardList';

const items =[
  {id: 0, author: "Bob Ross"},
  {id: 1, author: "Chuck Noris"},
]


export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <CardList items={items} />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
