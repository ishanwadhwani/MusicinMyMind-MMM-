import {
  StyleSheet,
  View,
  Text,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import color from "../../utils/color";

export default function CourseListItem({ course, booking}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push("course-detail", { course:course })}
    >
      <Image source={{ uri: course.image[0]?.url }} style={styles.image} />
      <View style={{ flex: 1 }}>
        <Text style={{ padding: 1, fontWeight: "bold", fontSize: 15 }}>
          {course.name}
        </Text>
        <Text style={{ padding: 1, fontWeight: "bold", fontSize: 15, marginTop: 5 }}>{course?.vendor}</Text>
        {/* <Text>{course?.address}</Text> */}
        <View>
            {/* <View style={{ display: "flex", flexDirection: "row" }}>
              <Text
                style={{ color: color.black, fontSize: 20, fontWeight: "bold" }}
              >
                Condition -{" "}
              </Text>
              <Text style={{ color: color.primary, fontSize: 20 }}>
                {course?.time}
              </Text>
            </View> */}
            <Text
              style={{ color: color.primary, fontSize: 15, fontWeight: "bold", marginTop: 10 }}
            >
              {" "}
              ₹{course?.pricing}.00 /month
            </Text>
          </View>
          {booking?.id?
            <View>
              <Text>{booking?.bookingStatus}</Text>
              <Text>{booking?.date}</Text>
              <Text>{booking?.time}</Text>
            </View>:null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: color.white,
    borderRadius: 15,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  courselinkbtn: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: color.primary,
    padding: 3,
    alignItems: "center",
    marginTop: 10,
    borderRadius: 20,
    paddingHorizontal: 50,
  },
});
