import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native';

import color from "../../utils/color";
import GlobalAPI from '../../utils/GlobalAPI'
import Heading from '../../Components/Heading';

export default function Category() {
    const [category, setCategory] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        getCategory();
    }, [])

    const getCategory = () => {
        GlobalAPI.getCategory().then(resp=>{
            // console.log("resp", resp);
            setCategory(resp?.categories);
        })
    }
  return (
    <View style={{marginTop: 10}}>
        <Heading text={"Categories"} isViewAll={true}/>
        <FlatList
            data={category}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => index <= 3 && (
                <TouchableOpacity 
                    onPress={()=>navigation.push("course-list", {category: item.name})}
                    style={styles.container}>
                    <View style={styles.iconContainer}>
                        <Image source={{ uri: item?.icon?.url }} 
                        style={{width: 35, height: 35}} />
                    </View>
                    <Text style={{marginTop:5}}>{item.name}</Text>
                </TouchableOpacity>
            )}
             />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        marginTop: 10,
    },

    iconContainer:{
        backgroundColor: color.white,
        padding: 17,
        borderRadius: 99,
    },
})