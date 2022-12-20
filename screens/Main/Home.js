import React from "react";
import { View, StyleSheet,FlatList,Image,TouchableOpacity } from "react-native";
import { Text } from "@react-native-material/core";
import Header from "../../components/Header";
import animals from '../../assets/data/animals';
import colors from '../../components/colors.json';
import feeds from '../../assets/data/feedCategories';
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const data = animals.Animals
console.log('animals', data)

 const feedsData = feeds.feeds.items
 console.log('feeds', feedsData)


const Home = () => {
    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.imageView}>
            <Image source={{uri: item.image}} style={styles.image}/>
            <Text variant="h2" style={styles.ItemText}>{item.title}</Text>
        </TouchableOpacity>
      );

    const renderFeedsItem = ({ item }) => (
        // <Text style={styles.ItemText}>{item.Petid}</Text>
        <TouchableOpacity style={styles.outerView} onPress={()=>navigation.navigate('Pd')}>
            <View style={styles.innerView}>
                <View style={{width:'40%'}}>
                    <Image source={{uri:item.image}} style={styles.ItemImage}/>
                </View>
                <View style={{width:'60%',flexDirection:'column'}}>
                    <Text variant='h3' style={styles.itemTitle}>{item.title}</Text>
                    <Text variant='h1' style={styles.itemDesc}>{item.Description}</Text>
                    <Text variant='h4' style={styles.itemPrice}>Price : {item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
      );

    return (
        <ScrollView>
            <Header/>
            <View style={styles.mainText}>
                <Text variant='h2' style={styles.Text}>Shop For your Pet</Text>
            </View>
            <View style={styles.categories}>
                <Text variant='h2' style={styles.categoriesText}>All Categories</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
            />
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: StyleSheet.hairlineWidth,
                }}
            />
            <FlatList
                data={feedsData}
                renderItem={renderFeedsItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    mainText:{
        alignItems: 'center',
        padding:10
    },
    Text:{
        color:'#000',
        fontSize: 35
    },
    categories:{
        alignItems:'flex-start',
        padding:10
    },
    categoriesText:{
        color:'#000',
        fontSize:20,
    },
    imageView:{
        padding:20
    },
    image:{
        width: 140,
        height: 140,
        borderRadius: 140 / 2,
        overflow: "hidden",
        borderWidth: 1.5,
        borderColor: colors.primary
    },
    ItemText:{
        textAlign:'center',
        color:'#000',
        fontSize:25,
        paddingTop:10
    },
    outerView:{
        padding:20,
    },
    innerView: {
        flexDirection:'row',
        padding:10,
        borderRadius:10,
        borderWidth : 0.5
    },
    ItemImage:{
        height:100,
        width:100,
        borderRadius:20
    },
    itemTitle:{
        color:'#000',
        fontSize:25,
    },
    itemDesc:{
        color:'#000',
        fontSize:20,
    },
    itemPrice:{
        color:'#000',
        fontSize:25,
    },
})

export default Home;
