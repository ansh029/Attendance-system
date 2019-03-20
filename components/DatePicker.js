
import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class DatePicker extends Component {

    render() {

        return (

        <View>
         <DateTimePicker
          isVisible={this.props.isDatePickerVisible}
          mode={this.props.pickermode}
          onConfirm={this.props.onConfirming}
          onCancel={this.props.onCancelling}
          />
        </View>

        );
    }
}