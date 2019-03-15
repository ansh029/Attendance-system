
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import Time from './Time';
import Report from './Report';


const TimeCardBottomNavigator = createBottomTabNavigator(
    {
      Time ,
      Report
    },
    {
      navigationOptions: ({ navigation }) => {
        const { routeName } = navigation.state.routes[navigation.state.index];
        return {
          header: null,
          showIcon: true ,
          headerTitle: routeName
        };
      }
    }
  );

  export default TimeCardBottomNavigator 