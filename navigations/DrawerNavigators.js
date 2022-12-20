import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '../components/colors.json'

//screens
import Home from '../screens/Main/Home';
import DogFood from '../screens/Main/DogFood';
import CatFood from '../screens/Main/CatFood';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: 240,
      },
      drawerActiveTintColor:colors.primary,
      //drawerLabel:'Shop for all Pets',
      drawerLabelStyle:{fontSize:20}
    }}>
      <Drawer.Screen name="Shop for All Pets" component={Home} options={{headerShown:false}}/>
      <Drawer.Screen name="Dog" component={DogFood} />
      <Drawer.Screen name="Cat" component={CatFood} />

    </Drawer.Navigator>
  );
}

export default MyDrawer;