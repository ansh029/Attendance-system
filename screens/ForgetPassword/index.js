
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { w, h, totalSize } from "../../api/Dimensions";
import InputField from '../../components/InputField';

const email = require('../../assets/email.png');

export default class ForgotPassword extends Component {

    render(){

        return (
            <View style={styles.container}>
            <Text style={styles.forgot}>Forgot Your Password?</Text>
            <InputField
              placeholder="Email"
              keyboardType="email-address"
              returnKeyType="done"
              blurOnSubmit={true}
              focus={this.changeInputFocus}
              ref={ref => this.email = ref}
              icon={email}
            />
            <TouchableOpacity activeOpacity={0.6} style={styles.button}>
              <Text style={styles.buttonText}>Send Email</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={() => this.props.navigation.navigate('Login')} style={styles.touchable}>
              <Text style={styles.login}>{'<'} Back To Login</Text>
            </TouchableOpacity>
          </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    forgot: {
      color:'white',
      fontSize: totalSize(2.5),
      marginBottom: h(6),
      fontWeight: '700',
    },
    button: {
      width: w(85),
      marginTop: h(6),
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      paddingVertical: w(1.8),
      borderRadius: w(25),
      borderColor: '#E0E0E0',
      borderWidth: 1,
    },
    buttonText: {
      color: 'white',
      fontWeight: '600',
      paddingVertical: h(1),
      fontSize: totalSize(2),
    },
    login: {
      color:'#ffffffEE',
      fontSize: totalSize(2),
      fontWeight: '700',
    },
    touchable: {
      alignSelf: 'flex-start',
      marginLeft: w(8),
      marginTop: h(5),
    }
  });