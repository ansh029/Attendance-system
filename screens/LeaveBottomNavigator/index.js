import {
    createBottomTabNavigator,
  } from 'react-navigation';
  

import Leave from './Leave';
import Report from './Report';


const LeaveBottomNavigator = createBottomTabNavigator(
    {
      Leave ,
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


  export default LeaveBottomNavigator