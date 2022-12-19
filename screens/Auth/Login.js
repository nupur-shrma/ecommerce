import React from "react";
import { View,StyleSheet,TouchableOpacity } from "react-native";
import colors from '../../components/colors.json'
import { Text, TextInput,IconButton,Stack,Button } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";


const Login = () => {

    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text variant="h1" style={styles.MainText}>LOGIN</Text>
            <Stack spacing={4} style={{ paddingTop: 56 }}>
                <TextInput
                    label="Email"
                    variant="outlined"
                    trailing={props => (
                        <IconButton icon={props => <Icon name="person" {...props} />} {...props} />
                    )}
                    style={styles.input}
                />
                <TextInput
                    label="Password"
                    variant="outlined"
                    trailing={props => (
                        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
                    )}
                    style={styles.input}
                />
                <View style={{paddingTop:20}}>
                    <Button variant="outlined" title="Login" color="#fff" />
                </View>
            </Stack>
            <View style={{paddingTop:20}}>

                <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
                <Text variant="h2" style={styles.smallText}>Not a member ?<Text variant="h2" style={styles.check}>Register</Text>
                </Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor:colors.primary,
        flex:1,
        alignItems:'center'
    },
    MainText:{
        color:'#fff',
        fontSize: 60,
        padding:20
    },
    input:{
        width:350
    },
    smallText:{
        fontSize:20,
        color:'#fff'
    },
    check:{
        color:'blue',
        fontSize:20,
    }
})

export default Login;
