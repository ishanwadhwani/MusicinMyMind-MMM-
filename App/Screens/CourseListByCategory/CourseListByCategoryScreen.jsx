import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import GlobalAPI from "../../utils/GlobalAPI";
import CourseListItem from "./CourseListItem";

export default function CourseListByCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();

  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    // console.log(param.category);
    param && getCourseByCategory();
  }, [param]);

  const getCourseByCategory = () => {
    GlobalAPI.getCourseListByCategory(param.category).then((resp) => {
      setCourseList(resp.courses);
    });
  };
  return (
    <View style={{ padding: 20, paddingTop: 30,  }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={{ fontSize: 25 }}>{param?.category}</Text>
      </TouchableOpacity>
      {courseList?.length>0? <FlatList
        data={courseList}
        renderItem={({ item, index }) => <CourseListItem course={item} />}
      />: <Text style={{fontSize: 20, textAlign:'center', marginTop: "20%", fontWeight:'bold'}}>No courses found</Text>}
    </View>
  );
}
