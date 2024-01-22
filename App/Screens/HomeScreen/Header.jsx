import React from "react";
import { StyleSheet, View, Text, Image, TextInput } from "react-native";
import { useUser } from "@clerk/clerk-expo";
import { AntDesign } from '@expo/vector-icons';

import color from "../../utils/color";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
    user && (
      <View style={styles.container}>

        {/* Profile Section */}
        <View style={styles.profilemainContainer}>
            <View style={styles.profileContainer}>
                <Image source={{ uri: user?.imageUrl }} style={styles.userImage} />
            <View>
                <Text 
                    style={{color:color.white}}>
                    Welcome,
                </Text>
                <Text 
                    style={{color:color.white, fontSize:17}}>
                    {user?.firstName}
                </Text>
            </View>
            </View>
            <AntDesign name="shoppingcart" size={24} color="white" />
        </View>
        {/* Search Section */}
        <View style={styles.searchBarContainer}>
            <TextInput
                style={styles.textInput} 
                placeholder="Search"
            />
            <AntDesign 
            style={styles.searchbtn}
            name="search1" 
            size={24} 
            color="black" />
        </ View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    backgroundColor:color.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  profilemainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
    textInput: {
        backgroundColor: color.white,
        borderRadius: 50,
        padding: 7,
        paddingHorizontal: 20,
        width: '85%',
    },
    searchBarContainer: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    searchbtn: {
        padding: 10,
        backgroundColor: color.white,
        borderRadius: 50,
    }
});
