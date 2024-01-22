import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import color from '../../utils/color';
import Header from './Header';
import Slider from './Slider';
import Category from './Category';
import CourseList from './CourseList';

export default function Home() {
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />

      {/* slider */}
      <View style={{padding:20}}>
        <Slider />
        <Category />
        <CourseList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
  }
})