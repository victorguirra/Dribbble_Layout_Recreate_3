import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import InitialScreen from '../Screens/Initial';
import FormScreen from '../Screens/Form';
import OthersScreens from './tabNavigation';

const TabNavigation = () => {
    return(
        <NavigationContainer>

            <Stack.Navigator headerMode="none" initialRouteName="Initial">

                <Stack.Screen name="Initial" component={InitialScreen} />
                <Stack.Screen name="Form" component={FormScreen} />
                <Stack.Screen name="OthersScreens" component={OthersScreens} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default TabNavigation;