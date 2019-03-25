import React, { Component } from 'react';
import {
    createBottomTabNavigator,
  } from 'react-navigation';
  
import Icon from 'react-native-vector-icons/Ionicons';
import Leave from './Leave';
import Report from './Report';


const LeaveBottomNavigator = createBottomTabNavigator(
    {
      Leave ,
      Report
    },
    {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Leave') {
          iconName = `md-calendar`;
         
         
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


  export default LeaveBottomNavigator