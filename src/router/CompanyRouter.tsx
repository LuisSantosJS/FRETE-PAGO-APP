import React from 'react';
import {
    StatusBar,
    View,
    Image,
    Platform,
    Dimensions
} from 'react-native';
import styles from './styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Icon from '../assets/icons/icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RectButton } from 'react-native-gesture-handler';
import HomeCompany from '../pages/HomeCompany';
import NotificationCompany from '../pages/NotificationCompany';
import ProfileCompany from '../pages/ProfileCompany';
const AppStack = createStackNavigator();
const FretePago = require('../assets/fretepago.png');
const width = Dimensions.get("window").width;

const CompanyRouter: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor='white' />
            <AppStack.Navigator>
                <AppStack.Screen
                    options={{
                        headerShown: false
                    }}
                    component={HomeCompany}
                    name='HomeCompany'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false
                    }}
                    component={ProfileCompany}
                    name='ProfileCompany'
                />
                <AppStack.Screen
                    options={{
                        header: ({ navigation }) => Header(navigation)

                    }}
                    component={NotificationCompany}
                    name='NotificationCompany'
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default CompanyRouter;


const Header = (navigation: any) => {
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: 'white' }} />
            <View style={styles.header}>
                <RectButton onPress={() => navigation.goBack()} style={styles.arrowView}>
                    <Icon.MaterialIcons name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'} size={width * 0.08} color='#707070' />
                </RectButton>
                <Image source={FretePago} style={styles.logoHeaderImage} />
                <View style={styles.arrowView} />
            </View>
        </>
    )
}