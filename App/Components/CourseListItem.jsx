import { StyleSheet, View, Text, Image, Linking } from "react-native";
import React from "react";

import color from "../utils/color";
export default function CourseListItem({ course }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: course?.image[0].url }} style={styles.image} />
      <View>
        <Text 
          style={{marginTop: 5, textAlign: 'center', fontWeight: "bold",}}>
          {course?.name}
        </Text>
        <View style={styles.courselinkcontainer}>
          <Text
            style={{
              backgroundColor: color.primary,
              color: color.white,
              padding: 3,
              borderRadius: 3,
              alignSelf: "flex-start",
              paddingHorizontal: 7,
            }}
            >
            {course?.category?.name}
          </Text>
          <Text
            style={{
              color: color.primary,
              fontWeight: "bold",
            }} 
            onPress={() => Linking.openURL(course?.link)}>
            Claim Here
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: color.white,
    borderRadius: 10,
    marginTop: 10,
  },
  image: {
    width: 220,
    height: 120,
    borderRadius: 10,
    alignContent: "center",
  },
  courselinkcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
});
