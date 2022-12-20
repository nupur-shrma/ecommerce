import React from "react";
import { View,StyleSheet } from "react-native";
import { Text,TextInput,IconButton } from "@react-native-material/core";
import colors from './colors.json'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="hamburger" size={20} color={'#fff'} onPress={()=>{navigation.toggleDrawer();}}/>
                <Text style={styles.HeaderText}>Pet Food</Text>
                <Icon name="shopping-cart" size={20} color={'#fff'}/>
            </View>
            <TextInput
                    label="Search"
                    variant="outlined"
                    trailing={props => (
                        <IconButton icon={props => <Icon name="search" {...props} />} {...props} />
                    )}
                    style={styles.input}
            />
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

export default Header;
