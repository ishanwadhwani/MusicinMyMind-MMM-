import React from "react";
import { Image, View, Text, FlatList } from "react-native";

import color from "../../utils/color";

export default function CoursePhotos({course}) {
  return (
    <View>
      <Text style={{ padding: 20, fontWeight: "bold", fontSize: 18 }}>More Photos</Text>
      <FlatList
        style={{ padding: 10 }}
        data={course.image}
        numColumns={2}
        renderItem={({ item }) => (
          <Image
            source={{ uri:item.url }}
            style={{ width: "100%", height: 150, flex: 1, margin: 7, borderWidth: 0.4,
            borderColor: color.primary, borderRadius: 10 }}
          />
        )}
      />
    </View>
  );
}
