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
import InitialPage from '../pages/InitialPage';
import BeforeLoginCompany from '../pages/BeforeLoginCompany';
import LoginTruck from '../pages/LoginTruck';
import RegisterTruck from '../pages/RegisterTruck';
import { RectButton } from 'react-native-gesture-handler';
import LoginCompany from '../pages/LoginCompany';
const AppStack = createStackNavigator();
const FretePago = require('../assets/fretepago.png');
const width = Dimensions.get("window").width;


const AuthRouter: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor='white' />
            <AppStack.Navigator>
                <AppStack.Screen
                    options={{
                        headerShown: false
                    }}
                    component={InitialPage}
                    name='InitialPage'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false
                    }}
                    component={LoginTruck}
                    name='LoginTruck'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false
                    }}
                    component={LoginCompany}
                    name='LoginCompany'
                />
                <AppStack.Screen
                    options={{
                        header: ({ navigation }) => Header(navigation)

                    }}
                    component={RegisterTruck}
                    name='RegisterTruck'
                />
                <AppStack.Screen
                    options={{
                        headerShown: false
                    }}
                    component={BeforeLoginCompany}
                    name='BeforeLoginCompany'
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default AuthRouter;

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