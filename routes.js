import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesome5 } from '@expo/vector-icons';

import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro/index1';
import Principal from './src/pages/Principal/index2';
import Turbo from './src/pages/Principal/Turbo/index3';
import InterCooler from './src/pages/Principal/InterCooler/index4';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const StackNavigate = () => {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false
                }}></Stack.Screen>

            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{
                    headerShown: false
                }}></Stack.Screen>

            <Stack.Screen
                name='Principal'
                component={DrawerNavigate}
                options={{
                    headerShown: false
                }}></Stack.Screen>
        </Stack.Navigator>
    )
}

const DrawerNavigate = () => {
    return (
        <Drawer.Navigator>

            <Drawer.Screen name="Principal"
                component={Principal}>
            </Drawer.Screen>

            <Drawer.Screen name="Turbo"
                component={Turbo}>
            </Drawer.Screen>

            <Drawer.Screen name="InterCooler"
                component={InterCooler}>
            </Drawer.Screen>

        </Drawer.Navigator>
    )
}

export default function Router() {
    return (

        <NavigationContainer>
            <StackNavigate />
        </NavigationContainer>

    );
}



