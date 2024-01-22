import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Screens/HomeScreen/Home'
import CourseListByCategory from '../Screens/CourseListByCategory/CourseListByCategoryScreen'
import CourseDetailScreen from '../Screens/CourseDetailScreen/CourseDetailScreen';

const Stack = createStackNavigator();
export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor:color.black,
    }}>
        <Stack.Screen name="Home" 
        component={Home} />
        <Stack.Screen name="course-list" 
        component={CourseListByCategory} />
        <Stack.Screen name="course-detail"
        component={CourseDetailScreen}/>
    </Stack.Navigator>
  )
}