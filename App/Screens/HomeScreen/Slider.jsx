import { StyleSheet, View, Text, FlatList, Image} from 'react-native'
import React, {useEffect, useState} from 'react'

import color from "../../utils/color";
import GlobalAPI from '../../utils/GlobalAPI'
import Heading from '../../Components/Heading';

export default function Slider() {
    
    const [slider, setSlider] = React.useState([]);
    useEffect(() => {
        getSliders();
    }, [])

    const getSliders = () => { 
        GlobalAPI.getSlider().then(resp=>{
            // console.log("resp", resp.sliders);
            setSlider(resp?.sliders);
        })
    }
  return (
    <View>
      <Heading text={"Estimated delivery time: 2-7 days"} />
        <FlatList
            data={slider}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => (
                <View >
                    <Image source={{ uri: item?.image?.url }} 
                    style={styles.sliderimage} />
                    {/* <Text>{item.name}</Text> */}
                </View>
            )}
             />
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize: 15,
        fontWeight: 'bold',
        color: color.black,
        alignItems: "center",
    },
    sliderimage:{
        width: 300,
        height: 200,
        borderRadius: 20,
        objectFit: "contain",
        margin: 10,
    }
})