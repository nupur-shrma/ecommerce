import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@react-native-material/core";

const DogFood = () => {
    return (
        <View style={styles.container}>
            <Text>Dog Food</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
})

export default DogFood;
