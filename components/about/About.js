import React from 'react';
import {View, Text} from 'react-native';


export default class About extends React.Component{
    render(){
        return (
            <View style={{ flex: 1, justifyContent: "center", padding: 50 }}>
                <Text>
                   This app was develop by Leonel Meque
                </Text>
                <Text>
                For a project from Udacity!
                </Text>
            </View>
        )
    }
}