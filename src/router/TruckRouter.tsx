import React from 'react';
import {
    StatusBar,
    View,
    Image,
    Platform,
    Dimensions
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
const AppStack = createStackNavigator();
const FretePago = require('../assets/fretepago.png');
const width = Dimensions.get("window").width;

const TruckRouter: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor='#191919' />
            <AppStack.Navigator>
                <AppStack.Screen
                    options={{
                        headerShown: false
                    }}
                    component={Home}
                    name='Home'
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default TruckRouter;