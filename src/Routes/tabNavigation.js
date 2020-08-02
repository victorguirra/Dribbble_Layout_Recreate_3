import React from 'react';
import {StatusBar} from 'expo-status-bar'
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MaterialIcons, FontAwesome5} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

import HomeScreen from '../Screens/Home';
import OrdersScreen from '../Screens/Orders';
import ClothesScreen from '../Screens/Clothes';
import NotificationsScreen from '../Screens/Notifications';
import ProfileScreen from '../Screens/Profile';

import AddClotheButton from '../Components/AddClothesButton';

const TabNavigation = () => {
    return(
        <>

            <StatusBar style="dark" />

            <NavigationContainer independent={true}>

                <Tab.Navigator
                tabBarOptions={{
                    style:{
                        backgroundColor:'#0D5C46',
                        paddingTop:15,
                        height:55,
                        borderTopLeftRadius:25,
                        borderTopRightRadius:25,
                    },
                    activeTintColor:'#fff',
                }}
                >

                    <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        title:'',
                        tabBarIcon:({color}) => (
                            <MaterialIcons name="home" size={25} color={color} />
                        )
                    }} 
                    />

                    <Tab.Screen 
                    name="Notifications" 
                    component={OrdersScreen} 
                    options={{
                        title:'',
                        tabBarIcon:({color}) => (
                            <FontAwesome5 name="th-list" size={20} color={color} />
                        )
                    }}
                    />

                    <Tab.Screen 
                    name="Clothes"
                    component={ClothesScreen}
                    options={{
                        title: '',
                        tabBarIcon:({color}) => (
                            <AddClotheButton />
                        )
                    }}
                    />

                    <Tab.Screen 
                    name="Orders" 
                    component={NotificationsScreen}
                    options={{
                        title:'',
                        tabBarIcon:({color}) => (
                            <MaterialIcons name="notifications" size={25} color={color} />
                        )
                    }} 
                    />

                    <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen} 
                    options={{
                        title:'',
                        tabBarIcon:({color}) => (
                            <MaterialIcons name="person" size={25} color={color} />
                        )
                    }}
                    />

                </Tab.Navigator>

            </NavigationContainer>

        </>
    )
}

export default TabNavigation;