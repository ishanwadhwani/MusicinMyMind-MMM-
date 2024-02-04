import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
  Modal,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from "react-native-virtualized-view";

import GlobalAPI from "../../utils/GlobalAPI";
import color from "../../utils/color";
import Heading from "../../Components/Heading";
import CoursePhotos from "./CoursePhotos";
import BookingModal from "./BookingModal";

export default function CourseDetailScreen() {
  const param = useRoute().params;
  const [course, setCourse] = useState(param.course);
  const [showModal, setShowModal] = useState(false);
  const [isReadmore, setIsReadmore] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    // param && setCourse(param?.course);
  }, []);

  return (
    course && (
      <View style={{ backgroundColor: color.white }}>
        <ScrollView style={{ marginTop: 35, height: "89%" }}>
          <TouchableOpacity
            style={styles.backbtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-outline" size={30} color="black" />
          </TouchableOpacity>
          <Image
            source={{ uri: course?.image[0]?.url }}
            style={{ width: "100%", height: 300 }}
          />
          <View style={{ padding: 20 }}>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", marginBottom: 10 }}
            >
              {course?.name}
            </Text>
            <View style={styles.subContainer}>
              <Text style={{ color: color.primary, fontSize: 20 }}>
                {course?.vendor},
              </Text>
              <Text style={{ color: color.primary, fontSize: 20 }}>
                {course?.address}
              </Text>
              {/* <Text
                style={{
                  color: color.white,
                  fontWeight: "bold",
                  backgroundColor: color.primary,
                  padding: 10,
                  borderRadius: 8,
                  fontSize: 14,
                }}
              >
                {course?.category?.name}
              </Text> */}
            </View>
            <View style={styles.pricing}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    color: color.black,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Condition -{" "}
                </Text>
                <Text style={{ color: color.primary, fontSize: 20 }}>
                  {course?.time}
                </Text>
              </View>
              <Text
                style={{
                  color: color.primary,
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {" "}
                ₹{course?.pricing}.00 /month
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.4,
                borderColor: color.primary,
                marginTop: 20,
                marginBottom: 20,
              }}
            ></View>
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>About</Text>
              <Text
                style={{
                  color: color.gray,
                  fontSize: 16,
                  lineHeight: 25,
                  textAlign: "justify",
                  marginTop: 10,
                }}
                numberOfLines={isReadmore ? 20 : 5}
              >
                {course?.about}
              </Text>
              <TouchableOpacity onPress={() => setIsReadmore(!isReadmore)}>
                <Text
                  style={{
                    color: color.primary,
                    fontSize: 16,
                    marginTop: 3,
                  }}
                >
                  {isReadmore ? "Read Less" : "Read More"}
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderWidth: 0.4,
                borderColor: color.primary,
                marginTop: 20,
              }}
            ></View>
          </View>
          <CoursePhotos course={course} />
        </ScrollView>
        <View
          style={{ display: "flex", flexDirection: "row", gap: 8, margin: 5 }}
        >
          <TouchableOpacity style={styles.msgbtn}>
            <Text
              style={{
                textAlign: "center",
                color: color.primary,
                fontSize: 18,
              }}
            >
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookingbtn}
            onPress={() => setShowModal(true)}>
            <Text
              style={{
                textAlign: "center",
                color: color.primary,
                fontSize: 18,
              }}
            >
              Book Now
            </Text>
          </TouchableOpacity>
        </View>

        {/* Booking Modal */}
        <Modal animationType="silde" visible={showModal}>
          <BookingModal
            businessId={course.id} 
            hideModal={() => setShowModal(false)}/>
        </Modal>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  backbtn: {
    position: "absolute",
    padding: 20,
    zIndex: 1,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  pricing: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  msgbtn: {
    padding: 10,
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 20,
    flex: 1,
  },
  bookingbtn: {
    padding: 10,
    backgroundColor: color.white,
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 20,
    flex: 1,
  },
});
