
import React, { Component } from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, Text, ActivityIndicator, View ,BackHandler} from 'react-native';
import PropTypes from 'prop-types';
import { w, h, totalSize } from "../../api/Dimensions";


export default class Options extends Component {

      componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
      }
    
      handleBackPress = () => {
        this.props.navigation.navigate('Login');
        return true;
      };

    render() {

        return (

            <View style={styles.container} >
                <TouchableOpacity activeOpacity={0.5} style={styles.button}
                  onPress={() => this.props.navigation.navigate('TimeCardBottomNavigator')}>
                <Text style={styles.text}>TimeCard</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.button}
                onPress={() => this.props.navigation.navigate('LeaveBottomNavigator')}>
                <Text style={styles.text}>Leave</Text>
                </TouchableOpacity>
            </View>

        )
    }
}


const styles = StyleSheet.create({
    button: {
        width: w(85),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        paddingVertical: w(2),
        borderRadius: w(10),
        borderColor: '#E0E0E0',
        borderWidth: 1,
        marginTop: h(2),
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontWeight: '600',
        paddingVertical: h(1),
        fontSize: totalSize(2.2),
    }
});