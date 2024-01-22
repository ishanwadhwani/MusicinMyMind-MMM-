import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/HomeScreen/Home'
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen'
import Booking from '../Screens/BookingScreen/Booking'
import color from '../utils/color';
import HomeNavigation from './HomeNavigation';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor:color.black,
    }}>
      <Tab.Screen name='home' component={HomeNavigation} 
        options={{tabBarLabel:({color}) => (
            <Text 
                style={{color:color, fontSize:12, marginTop:-7}}>
                Home
            </Text> 
            ),
            tabBarIcon: ({color, size}) => (
              <AntDesign name="home" size={size} color={color} />
        )}}/>
      <Tab.Screen name='booking' component={Booking} 
        options={{tabBarLabel:({color}) => (
          <Text 
              style={{color:color, fontSize:12, marginTop:-7}}>
              Booking
          </Text> 
          ),
          tabBarIcon: ({color, size}) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
      )}}/>
      <Tab.Screen name='profile' component={ProfileScreen} 
        options={{tabBarLabel:({color}) => (
          <Text 
              style={{color:color, fontSize:12, marginTop:-7}}>
              Profile
          </Text> 
          ),
          tabBarIcon: ({color, size}) => (
            <AntDesign name="profile" size={size} color={color} />
      )}}/>
    </Tab.Navigator>

  )
}