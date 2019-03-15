import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { w, h, totalSize } from '../../api/Dimensions';
import InputField from '../../components/InputField';
import Continue from './Continue';
const email = require('../../assets/email.png');
const password = require('../../assets/password.png');
const repeat = require('../../assets/repeat.png');
const person = require('../../assets/person.png');

export default class Register extends Component {


  render() {

    return (

      <View style={styles.container}>
        <Text style={styles.create}>CREATE ACCOUNT</Text>

        <InputField
          placeholder="Name"
          autoCapitalize="words"
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.name = ref}
          icon={person}
        />
        <InputField
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.email = ref}
          icon={email}
        />
        <InputField
          placeholder="Password"
          style={styles.input}
          focus={this.changeInputFocus}
          ref={ref => this.password = ref}
          secureTextEntry={true}
          icon={password}
        />
        <InputField
          placeholder="Repeat Password"
          style={styles.input}
          secureTextEntry={true}
          returnKeyType="done"
          blurOnSubmit={true}
          focus={this.changeInputFocus}
          ref={ref => this.repeat = ref}
          icon={repeat}
        />
        <Continue isCreating={false} />
        <TouchableOpacity style={styles.touchable}
        onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text style={styles.signIn}>{'<'} Sign In</Text>
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
  create: {
    color: 'white',
    fontSize: totalSize(2.4),
    marginTop: h(2),
    marginBottom: h(2),
    fontWeight: '700',
  },
  signIn: {
    color: '#ffffffEE',
    fontSize: totalSize(2),
    fontWeight: '700',
  },
  touchable: {
    alignSelf: 'flex-start',
    marginLeft: w(8),
    marginTop: h(2),
  },
  input: {
    marginVertical: h(2),
  }
});