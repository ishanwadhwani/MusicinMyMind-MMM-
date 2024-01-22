import { StyleSheet, View, Text } from "react-native";
import React from "react";

import color from "../utils/color";

export default function Heading({text, isViewAll=false}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{text}</Text>
      {isViewAll && <Text>View All</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    fontWeight: "bold",
    color: color.black,
    alignItems: "center",
  },
  container:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row", 
},
});
