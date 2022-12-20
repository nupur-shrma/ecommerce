import React from "react";
import { View,StyleSheet,Image,TouchableOpacity} from "react-native";
import { Text } from "@react-native-material/core";
import Header1 from "../../components/header1";
import colors from '../../components/colors.json'

const ProductDesc = () => {
    return (
        <View>
            <Header1/>
            <View style={styles.TitleView}>
                <Text variant="h3" style={styles.TitleText}>Feed 1</Text>
            </View>
            <View style={styles.titles}>
                <Text>Pet Food</Text>
                <Text variant="h4">Most Delicious and Healthy food. Your pet would feel amazing.</Text>
            </View>
            <View style={{padding:10}}>
                <Image source={{uri:'https://media.gettyimages.com/id/165907425/photo/dog-food.jpg?s=612x612&w=gi&k=20&c=w4NtYD_1ry0J8I87voqOqWoC8421qxE5hA5QkV8Hoe4='}} style={styles.image}/>
            </View>
            <View style={styles.titles}>
                <Text variant="h4" style={{color:colors.primary}}>$27.8</Text>
            </View>
            <View style={{padding:20, alignItems:'center'}}>
                <TouchableOpacity style={styles.button}>
                    <Text variant="h4" style={{textAlign:'center', color:'#fff'}}>Add To Cart</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    TitleView:{
        alignItems:'center',
        padding:10,
    },
    TitleText:{
        color:'#000',
    },
    image:{
        width:'100%',
        height:300,
    },
    titles:{
       alignItems:'flex-start',
       padding:10 
    },
    button:{
        backgroundColor:colors.primary,
        padding:10,
        width:'100%',
        borderRadius:20,
        borderWidth:1,
        borderColor:'grey'
    },
})

export default ProductDesc;
