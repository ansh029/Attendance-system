import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  createStackNavigator
} from 'react-navigation';


class Profile extends Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Report</Text>
        </View>
      );
    }
  }


const Report = createStackNavigator({
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        
        return {
          headerTitle: 'Report',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }}  name="md-menu" size={30} />
          )
        };
      }
    }
  });


  export default Report