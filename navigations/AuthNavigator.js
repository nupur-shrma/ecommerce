import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import SignUp from '../screens/Auth/SignUp';
import Login from '../screens/Auth/Login';

const Stack = createNativeStackNavigator();

function AuthNavigator () {
    return (
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
          </Stack.Navigator>
      );
}

export default AuthNavigator;