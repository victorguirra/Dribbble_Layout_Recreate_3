import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import HomeScreen from '../Screens/Home';
import ClothesScreen from '../Screens/Clothes';

const TabNavigation = () => {
    return(
        <NavigationContainer independent={true}>

            <Tab.Navigator>

                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Clothes" component={ClothesScreen} />

            </Tab.Navigator>

        </NavigationContainer>
    )
}

export default TabNavigation;