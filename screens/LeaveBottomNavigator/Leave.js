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


class LeaveForm extends Component {

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
    

    render() {

        return (
            <View style={styles.keyboard}>
                <View>
                    <View style={styles.inputRowstyle1} >

                        <View style={styles.floatingLabelStyle} >
                            <Item floatingLabel>
                                <Label style={{ color: "white" }} >From</Label >
                                <Input
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    style={{ color: "white" }}
                                />
                            </Item>
                        </View>

                        <View style={styles.floatingLabelStyle} >
                            <Item floatingLabel  >
                                <Label style={{ color: "white" }}>To</Label>
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



                        <View style={styles.floatingLabelStyle} >
                            <Item floatingLabel>
                                <Label style={{ color: "white" }} >No Of Days</Label >
                                <Input

                                    autoCorrect={false}
                                    autoCapitalize="none"
                                    style={{ color: "white" }}
                                />
                            </Item>
                        </View>

                        <View style={styles.floatingLabelStyle} >
                            <Item floatingLabel  >
                                <Label style={{ color: "white" }}>Type of Leave</Label>
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

            </View>
        );
    }

}


const Leave = createStackNavigator({
    ApplyLeave: {
        screen: LeaveForm,
        navigationOptions: ({ navigation }) => {

            return {
                headerTitle: 'Leave',
                headerLeft: (
                    <Icon style={{ paddingLeft: 10 }} name="md-menu" size={30} />
                )
            };
        }
    }
});


const styles = StyleSheet.create({

    inputRowstyle1: {
        flexDirection: 'row',
        marginTop: 25
    }, keyboard: {
        flex: 1,
        backgroundColor: '#555',
    },
    floatingLabelStyle: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5
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

export default Leave
