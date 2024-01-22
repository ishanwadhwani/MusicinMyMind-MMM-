import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../../utils/color'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";

WebBrowser.maybeCompleteAuthSession();


export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  return (
    <View style={{alignItems:'center'}}>
      <Image source={require('./../../../assets/images/loginimage.png')}
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{fontSize:20, color:color.black, textAlign:'center'}}>
            <Text style={{fontWeight:'bold'}}>"Embrace melodies, rent instruments."</Text> Sign up or Log in at Music in My Mind!
        </Text>
        <Text  style={{fontSize:16, color:color.black, textAlign:'center', marginTop:20}}>
            Discover, rent, and create melodies with our vast collection of high-quality instruments.        
        </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{textAlign:'center', fontSize:18, color:color.black}}>
                Let's get started!
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 400,
        height: 370,
        marginTop: 70,
        borderColor: '#20232a',
        borderRadius: 15,
    },
    subContainer: {
        width:410,
        backgroundColor:color.white,
        height:'70%',
        marginTop:-20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        padding:40,
    },
    button: {
        padding: 15,
        backgroundColor:color.primary,
        borderRadius:25,
        marginTop:50,
    }
})