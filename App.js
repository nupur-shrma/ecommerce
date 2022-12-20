// In App.js in a new project
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//navigators
import AuthNavigator from './navigations/AuthNavigator';
import Home from './screens/Main/Home';
import MyDrawer from './navigations/DrawerNavigators';
import ProductDesc from './screens/Main/productDesc';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:'#000'}}>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthNavigator} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={MyDrawer} options={{headerShown:false}}/>
        <Stack.Screen name="Pd" component={ProductDesc} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;