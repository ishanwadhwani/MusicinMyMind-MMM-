import { StyleSheet, View, Text, FlatList, Image } from 'react-native'
import React, {useEffect, useState} from 'react'


import Heading from '../../Components/Heading'
import GlobalAPI from '../../utils/GlobalAPI'
import CourseListItem from '../../Components/CourseListItem';

export default function CourseList() {

    const [courseLists, setCourseLists] = useState([]);
    useEffect(() => {
        getCourseList();
    }, [])

    const getCourseList = () => {
        GlobalAPI.getCourseList().then(resp=>{
            // console.log("resp", resp);
            setCourseLists(resp?.courses);
        })
    }
  return (
    <View style={{marginTop: 20}}>
      <Heading text={'Free Courses'} isViewAll={true} />
        <FlatList
            data={courseLists}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) =>(
            <View style={{marginRight: 10}}>
                <CourseListItem course={item} />
            </View>
            )} />
    </View>
  )
}