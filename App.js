import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as SecureStore from "expo-secure-store";
import { NavigationContainer } from '@react-navigation/native';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

import Login from './App/Screens/LoginScreen/Login';
import color from './App/utils/color';
import TabNavigation from "./App/Navigation/TabNavigation";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export default function App() {
  return (
    <ClerkProvider
      tokenCache={tokenCache} 
      publishableKey='pk_test_cmVsZXZhbnQtYXJhY2huaWQtNjQuY2xlcmsuYWNjb3VudHMuZGV2JA'
    >
      <View style={styles.container}>
        {/* user signin/signout component using clerk*/}
        <SignedIn>
          <NavigationContainer>
            <TabNavigation/>
          </NavigationContainer>
        </SignedIn>

        <SignedOut>
          <Login/>
        </SignedOut>

        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:color.white,
    // paddingTop: 20,
  },
});
