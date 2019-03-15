import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image } from 'react-native';

import InputField from "../../components/InputField";
import { w, h, totalSize } from '../../api/Dimensions';
import GetStarted from './GetStarted';

const companyLogo = require('../../assets/companylogo.png');
const email = require('../../assets/email.png');
const password = require('../../assets/password.png');


export default class Login extends Component {
    
    
    getStarted = () => {
        this.props.navigation.navigate('Options')
      };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.icon} resizeMode="contain" source={companyLogo} />
                <InputField
                    placeholder="Email"
                    keyboardType="email-address"
                    style={styles.email}
                    focus={this.changeInputFocus}
                    ref={ref => this.email = ref}
                    icon={email}
                />
                <InputField
                    placeholder="Password"
                    returnKeyType="done"
                    secureTextEntry={true}
                    blurOnSubmit={true}
                    ref={ref => this.password = ref}
                    focus={this.changeInputFocus}
                    icon={password}
                />
                <GetStarted
                    click={this.getStarted}
                    isLogin={false}
                />
                <View style={styles.textContainer}>
                    <TouchableOpacity style={styles.touchable} activeOpacity={0.6}
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.createAccount}>Create Account</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchable} activeOpacity={0.6}
                     onPress={() => this.props.navigation.navigate('ForgetPassword')}
                    >
                        <Text style={styles.forgotPassword}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        width: w(70),
        height: h(30),
        marginTop: h(3),
        marginBottom: h(7),
    },
    textContainer: {
        width: w(100),
        flexDirection: 'row',
        marginTop: h(5),
    },
    email: {
        marginBottom: h(4.5),
    },
    touchable: {
        flex: 1,
    },
    createAccount: {
        color: '#ffffffEE',
        textAlign: 'center',
        fontSize: totalSize(2),
        fontWeight: '600',
    },
    forgotPassword: {
        color: '#ffffffEE',
        textAlign: 'center',
        fontSize: totalSize(2),
        fontWeight: '600',
    },
});