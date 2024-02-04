import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import color from "../../utils/color";
import terms from "../../utils/data";
import Heading from "../../Components/Heading";

export default function BookingModal({ hideModal }) {
  return (
    <ScrollView style={{ padding: 20, }}>
      <TouchableOpacity
        onPress={() => hideModal()}
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Ionicons name="arrow-back-outline" size={24} color="black" />
        <Text style={{ fontSize: 20 }}>Terms and conditions</Text>
      </TouchableOpacity>

      {terms.map((item) => (
        <View key={item.id} style={styles.container}>
          <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>{item.title}</Text>

          {item.terms.map((t) => (
            <View key={t.id} style={styles.termspoints}>
              <Text style={{ fontSize: 15, marginBottom: 5 }}>{`\u2023 ${t.condition}`}</Text>
            </View>
          ))}
        </View>
      ))}
      <View style={styles.condition}>
        <Text style={{fontWeight: 'bold', marginBottom: 5}}>
          By confirming your booking, you hereby acknowledge and agree to these
          terms and conditions.
        </Text>
        <Text style={{marginBottom: 20, fontSize: 10}}>
          Please note that these terms are a general guide and may need to be
          tailored to specific legal requirements and considerations in your
          jurisdiction. It is advisable to consult with a legal professional to
          ensure compliance with all relevant laws and regulations.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container : {
        marginBottom: 20,
        borderWidth : 1,
        padding: 10,
        borderRadius: 10,
        borderColor: color.lightGray,
        backgroundColor: color.lightGray,  
    },
    termspoints : { 
        padding: 4, 
        marginLeft: 10,
    },
    condition :{
        borderWidth : 1,
        padding: 5,
        borderRadius: 10,
        borderColor: color.lightGray,
    }
});
