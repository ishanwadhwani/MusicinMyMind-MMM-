import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  ScrollView,
  KeyboardAvoidingView,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import { useUser} from '@clerk/clerk-expo'

import color from "../../utils/color";
import TermsModal from "./TermsModal";
import Heading from "../../Components/Heading";
import GlobalAPI from "../../utils/GlobalAPI";

export default function BookingModal({ businessId, hideModal }) {
  const [selectedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();
  const [month, setMonth] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const {user} = useUser();
  const handleBooking = async () => {
    if (!selectedDate || !month) {
      return ToastAndroid.show("Please select date and month", ToastAndroid.LONG);
    }
    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      time: month,
      date: selectedDate,
      businessId: businessId,
    };

    try {
      const res = await GlobalAPI.createBooking(data);
      console.log(res);
      ToastAndroid.show("Booking created successfully", ToastAndroid.LONG);
    } catch (error) {
      console.error(error);
      ToastAndroid.show("Failed to create booking", ToastAndroid.LONG);
    }
  };

  <TouchableOpacity style={{ marginTop: 10 }} onPress={handleBooking}>
    <Text style={styles.bookingpagebtn}>Continue to book</Text>
  </TouchableOpacity>
  const getMonth = (value) => {
    setMonth(value);
  };

  const createNewBooking = () => {
    if(!selectedDate || !month){
      return ToastAndroid.show("Please select date and month", ToastAndroid.LONG); }
    const data = { 
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      time:month,
      date:selectedDate,
      businessId:businessId,
    }

    GlobalAPI.createBooking(data).then(res => {
      console.log(res);
      ToastAndroid.show("Booking created successfully", ToastAndroid.LONG);
      hideModal();
    })
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView style={{ padding: 20 }}>
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
          <Text style={{ fontSize: 20 }}>Checkout</Text>
        </TouchableOpacity>

        <Heading text={"Select Date"} />
        <View style={styles.calendarContainer}>
          <CalendarPicker
            onDateChange={setSelectedDate}
            width={340}
            minDate={Date.now()}
            backgroundColor={color.black}
            todayTextStyle={{ color: color.red }}
            selectedDayColor={color.primary}
            selectedDayTextColor="white"
            allowRangeSelection={false}
          />
        </View>

        <View style={{ paddingTop: 20, justifyContent: "center" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>Month/s</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <TouchableOpacity
                key={number}
                style={[
                  {
                    marginVertical: 10,
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor:
                      month === number ? color.lightGray : color.primary,
                  },
                ]}
                onPress={() => getMonth(number)}
              >
                <Text style={styles.monthbtn}>{number}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={{ paddingTop: 20 }}>
          <Heading text={"Notes"} />
          <TextInput
            placeholder="Add any requests to vendor"
            numberOfLines={4}
            multiline={true}
            style={styles.noteTextArea}
            onChange={(text) => setNote(text)}
          />
        </View>

        <View style={styles.condition}>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => setShowModal(true)}
          >
            <Text
              style={{
                color: color.primary,
              }}
            >
              Terms and Conditions
            </Text>
            <Ionicons
              name="arrow-forward-outline"
              size={15}
              color={color.primary}
              style={{ padding: 2 }}
            />
          </TouchableOpacity>
          <Text style={{ fontWeight: "bold", marginBottom: 10, marginTop: 5 }}>
            *By confirming your booking, you hereby acknowledge and agree to the
            terms and conditions.
          </Text>
        </View>

        {/* Terms and conditions Modal */}
        <Modal animationType="silde" visible={showModal}>
          <TermsModal hideModal={() => setShowModal(false)} />
        </Modal>

        <TouchableOpacity 
          style={{ marginTop: 10 }}
          onPress={()=>createNewBooking()}>
          <Text style={styles.bookingpagebtn}>Continue to book</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: color.white,
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  noteTextArea: {
    borderWidth: 1,
    borderRadius: 10,
    textAlignVertical: "top",
    padding: 20,
    fontSize: 16,
    marginTop: 10,
    borderColor: color.lightGray,
  },
  bookingpagebtn: {
    color: color.white,
    textAlign: "center",
    fontSize: 17,
    backgroundColor: color.primary,
    padding: 13,
    borderRadius: 10,
    elevation: 3,
  },
  monthbtn: {
    padding: 7,
    borderRadius: 99,
    color: color.white,
  },
  selectedMonth: {
    backgroundColor: color.lightGray,
    borderRadius: 99,
    padding: 7,
    color: color.black,
  },
  condition: {
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    borderColor: color.lightGray,
    padding: 10,
    marginTop: 20,
  },
});
