/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';

import { KeyboardAvoidingView, StyleSheet, ImageBackground } from 'react-native';

import PropTypes from 'prop-types';
import { w } from './api/Dimensions';

import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';


import Login from './screens/Login';
import Register from './screens/Register';
import ForgetPassword from './screens/ForgetPassword';
import Options from './screens/Options';
import TimeCardBottomNavigator from './screens/TimeCardBottomNavigator';
import LeaveBottomNavigator from './screens/LeaveBottomNavigator';


class App extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={-w(40)}
        style={styles.container}
      >
        <ImageBackground
          source={this.props.background}
          style={styles.background}
          resizeMode="stretch"
        >
          <AppContainer />
        </ImageBackground>
      </KeyboardAvoidingView>

    );
  }
}

export default App;


const AppSwitchNavigator = createSwitchNavigator({

  Login: { screen: Login },
  Register: { screen: Register },
  ForgetPassword: { screen: ForgetPassword },
  Options: { screen: Options },
  TimeCardBottomNavigator: { screen: TimeCardBottomNavigator },
  LeaveBottomNavigator: { screen: LeaveBottomNavigator }
},
  {
    initialRouteName: 'Login',
  }

);


const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#555',
  },
  background: {
    width: '100%',
    height: '100%',
  }
});