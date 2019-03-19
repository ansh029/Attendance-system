
import React, { Component } from 'react';
import { StyleSheet, View, Image, TextInput } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class DatePicker extends Component {

    render() {

        return (

        <View>
         <DateTimePicker
          isVisible={this.props.isVisible}
          mode={this.props.mode}
          onConfirm={this.props.onConfirm}
          onCancel={this.props.onCancel}
          />
        </View>

        );
    }
}