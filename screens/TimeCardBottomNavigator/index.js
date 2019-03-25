
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  
  createBottomTabNavigator
} from 'react-navigation';

import Time from './Time';
import Report from './Report';


const TimeCardBottomNavigator = createBottomTabNavigator(
    {
      Time ,
      Report
    },
    {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Time') {
          iconName = `ios-time`;
         
         
        } else if (routeName === 'Report') {
          iconName = `ios-information-circle`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      activeBackgroundColor:'gray',
      inactiveBackgroundColor:'white'
      
    },
  }
  );

  export default TimeCardBottomNavigator 