
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Input, Item, Label } from 'native-base';
import { w, h, totalSize } from '../../api/Dimensions';
import DatePicker from '../../components/DatePicker';
import moment from 'moment';

import {
  createStackNavigator
} from 'react-navigation';


class Profile extends Component {

  constructor() {
    super()
    this.state = {
      isDatePickerVisible: false,
      chosenDate: '',
      chosenStartTime: '',
      chosenEndTime: '',
      pickermode: '',
    }
  }


  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  handleBackPress = () => {
    this.props.navigation.navigate('Options');
    return true;
  };

  handlePicker = date => {

    this.setState({
      isDatePickerVisible: false,
      chosenStartTime: moment(date).format('hh:mm')
    })

  }

  handleStartTimePicker = date => {
    this.setState({
      isDatePickerVisible: false,
      chosenEndTime: moment(date).format('hh:mm')
    })
  }

  handleEndTimePicker = date => {
    this.setState
    ({
      isDatePickerVisible: false,
      chosenDate: moment(date).format('DD/MM/YYYY')
    })

  }

  confirmButtonLogic=()=>{
    if(this.state.pickermode="date"){
      
      this.handlePicker
      
    }else if(this.state.pickermode="time"){

      this.handleStartTimePicker
    }
  }


  hidePicker = () => {
    this.setState({ isDatePickerVisible: false })
  }


  render() {
    return (
      <View style={styles.keyboard}>
        <View>
          <View style={styles.inputRowstyle1} >

            <View style={styles.floatingLabelStyle2} >
              <Item floatingLabel >
                <Label style={{ color: "white" }} >Date</Label >
                <Input
                  onTouchStart={()=>this.setState({ isDatePickerVisible: true, pickermode: "date"})}
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{ color: "white" }}
                  value={this.state.chosenDate} />
              </Item>
            </View>

            <View style={styles.floatingLabelStyle} >
              <Item floatingLabel style={{ flex: 1 }}  >
                <Label style={{ color: "white" }}>Start Time</Label>
                <Input
                  onTouchStart={()=>this.setState({ isDatePickerVisible: true, pickermode: "time"})}
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{ color: "white" }}
                  value={this.state.chosenStartTime}
                />
              </Item>
            </View>

            <View style={styles.floatingLabelStyle}  >
              <Item floatingLabel style={{ flex: 1 }} >
                <Label style={{ color: "white" }}>End Time</Label>
                <Input
                  onTouchStart={()=>this.setState({ isDatePickerVisible: true, pickermode: "time" })}
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{ color: "white" }}
                  value={this.state.chosenEndTime}
                />
              </Item>
            </View>
          </View>
        </View>
        <View>
          <View style={styles.inputRowstyle1} >

            <View style={styles.floatingLabelStyle}>
              <Item floatingLabel >
                <Label style={{ color: "white" }}>Project</Label >
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{ color: "white" }}
                />
              </Item>
            </View>

            <View style={styles.floatingLabelStyle} >
              <Item floatingLabel style={{ flex: 1 }}  >
                <Label style={{ color: "white" }}>Task</Label>
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{ color: "white" }}

                />
              </Item>
            </View>

          </View>
        </View>
        <View>
          <View style={styles.inputRowstyle1} >

            <View style={styles.floatingLabelStyle}>
              <Item floatingLabel >
                <Label style={{ color: "white" }}>Comments</Label >
                <Input
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{ color: "white" }}
                />
              </Item>
            </View>

          </View>
        </View>

        <View>

          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}>
            <Text style={styles.text}>Submit</Text>
          </TouchableOpacity>

        </View>

        <DatePicker
          onConfirm={()=>this.confirmButtonLogic}
          isVisible={()=>this.state.isDatePickerVisible}
          mode={()=>this.state.pickermode}
          onCancel={()=>this.hidePicker}
        />
      </View>
    );
  }
}

const Time = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {

      return {

        headerTitle: 'Time',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} name="md-menu" size={30} />
        )
      };
    }
  }
});

const styles = StyleSheet.create({

  floatingLabelStyle: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5
  }, floatingLabelStyle2: {
    flex: 2,
    marginLeft: 5,
    marginRight: 5
  },

  inputRowstyle1: {
    flexDirection: 'row',
    marginTop: 25
  }, keyboard: {
    flex: 1,
    backgroundColor: '#555',
  }, containerStyle: {
    flex: 1
  }, button: {
    width: w(85),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingVertical: w(2),
    borderRadius: w(10),
    borderColor: '#E0E0E0',
    borderWidth: 1,
    marginTop: h(16),
  },
  text: {
    color: 'white',
    fontWeight: '600',
    paddingVertical: h(1),
    fontSize: totalSize(2.2),
  }
});

export default Time


//moment(date).format('MMMM, Do YYYY HH:mm')