/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
   AppRegistry,
   StyleSheet,
   TextInput,
   Text,
   ScrollView,
   View,
   Button,
   Alert
} from 'react-native';


function getMoviesFromApiAsync() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        return console.log(responseJson.movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }

const onButtonPress = () => {
   Alert.alert('HellYeah button has been pressed!');
};

export default class AwesomeProject extends Component {
   render() {
      return (
         <View style={styles.wrapper}>
            <View style={styles.header}>
               <Text style={styles.welcome}>
               Header - Welcome to React Native David!
               </Text>
            </View>
            <View style={styles.content}>
               <ScrollView>
                  <Button onPress={onButtonPress} title="Press Me" accessibilityLabel="See an informative alert"/>
                  <Text style={{fontSize:60}}>Scroll me plz</Text>
                  <Text style={{fontSize:60}}>Scroll me plz</Text>
                  <Text style={{fontSize:60}}>Scroll me plz</Text>
                  <Text style={styles.awesome}>
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Cras ultricies ligula sed magna dictum porta. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta.
                  </Text>
                  <TextInput
                  style={{height: 40}}
                  placeholder="Type here to translate!"
                  onChangeText={(text) => this.setState({text})}
                  />
               </ScrollView>
            </View>
            <View style={styles.footer}>
               <Text style={styles.instructions}>
               Footer Baby
               </Text>
            </View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   wrapper: {
      flex: 1
   },
   header: {
      height: 50,
      backgroundColor: '#444'
   },
   content: {
      flex: 7,
      backgroundColor: '#fff'
   },
   footer: {
      flex: 1,
      backgroundColor: 'steelblue'
   },
   welcome: {
      fontSize: 19,
      textAlign: 'center',
      padding: 10,
      color: '#000'
   },
   awesome: {
      fontSize: 12,
      textAlign: 'center',
      color: '#444',
      margin: 10,
   },
   instructions: {
      textAlign: 'center',
      color: '#333333'
   },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
