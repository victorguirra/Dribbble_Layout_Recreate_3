import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const InitialScreen = ({navigation}) => {
    return(
        <TouchableOpacity 
        onPress={() => navigation.navigate('OthersScreen')}
        style={{backgroundColor: '#ff1493', width: 150, height: 50}}
        >

            <Text>Go To Home Screen</Text>

        </TouchableOpacity>
    )
}

export default InitialScreen;