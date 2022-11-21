import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack';

import * as React from 'react';
import 'react-native-gesture-handler'

import{ChartPieSlice, ClipboardText, House} from 'phosphor-react-native'


import { Home } from '../screens/Home'
import { Projects } from '../screens/Projects/Index';
import { Quotation } from '../screens/Quotation';
import { SignIn } from '../screens/SignIn'
import { Profile } from '../screens/Profile';

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator();


function DrawerMenu() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerTintColor: '#FFFFFF',
        drawerActiveTintColor: '#FFFFFF',
        headerStyle: {
          backgroundColor: '#6863F2',
        },
        drawerStyle: {
          backgroundColor: '#6863F2',
        }
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={Home}
        options={{
          drawerIcon:()=> <House color='white' size={24} />
        }}      
      />

      <Drawer.Screen 
      name="Projects" 
      component={Projects}
      options={{
        drawerIcon:()=> <ChartPieSlice color='white' size={24} />
      }}
      />

      <Drawer.Screen 
      name="Quotation" 
      component={Quotation}
      options={{
        drawerIcon:()=> <ClipboardText color='white' size={24} />
      }}
       />

    </Drawer.Navigator>
  )
}

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection:'horizontal'
    }}>
      <Stack.Screen name="SignIn" component={SignIn}/>
      <Stack.Screen name="Home" component={DrawerMenu}/>
      <Stack.Screen name="Profile" component={Profile}/>


    </Stack.Navigator>
  )
}
