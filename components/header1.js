import React from "react";
import { View,StyleSheet } from "react-native";
import { Text,TextInput,IconButton } from "@react-native-material/core";
import colors from './colors.json'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";

const Header1 = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="arrow-back-outline" size={20} color={'#fff'} onPress={()=>{navigation.goBack();}}/>
                <Text style={styles.HeaderText}>Pet Food</Text>
                <Icon name="cart" size={20} color={'#fff'}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        alignItems:'flex-start',
    },
    header: {
        backgroundColor: colors.primary,
        padding:20,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    HeaderText:{
        fontSize:18,
        color:'#fff',

    },
    input:{
        width:'100%',
        paddingLeft:'10%',
        paddingRight:'10%',
        paddingTop:10,
        backgroundColor:colors.primary
    },
});

export default Header1;
