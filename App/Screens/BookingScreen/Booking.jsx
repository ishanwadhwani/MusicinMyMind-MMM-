import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-expo'

import GlobalAPI from '../../utils/GlobalAPI'
import CourseListItem from '../CourseListByCategory/CourseListItem'

export default function Booking() {

  const {user} = useUser()
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    user&&getUserBookings()
  }, [user])

  const getUserBookings=()=>{ 
    GlobalAPI.getUserBookings(user?.primaryEmailAddress.emailAddress).then(res => {
      setBookings(res.bookings);
    })
  }
  return (
    <View style={{padding: 20, marginTop: 20}}>
      <Text style={{fontSize:26}}>My Bookings</Text>

      <View>
        <FlatList 
        data={bookings}
        renderItem={({item, index}) => (
          <CourseListItem 
            course={item?.business}
            booking={item}/>
        )}/>
      </View>
    </View>
  )
}