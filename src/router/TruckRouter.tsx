import React from 'react';
import {
    StatusBar,
    View,
    Image,
    Platform,
    Dimensions
} from 'react-native';
import styles from './styles';
import Icon from '../assets/icons/icons';
import InfoCorrida from '../pages/InfoCorrida'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RectButton } from 'react-native-gesture-handler';
import Home from '../pages/Home';
import Propostas from '../pages/Propostas';
import PropostasAceitas from '../pages/PropostasAceitas';
import Entregues from '../pages/Entregues';
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
                <AppStack.Screen
                    options={{
                        header: ({ navigation }) => Header(navigation)
                    }}
                    component={InfoCorrida}
                    name='InfoCorrida'
                />
                <AppStack.Screen
                    options={{
                        header: ({ navigation }) => Header(navigation)
                    }}
                    component={Propostas}
                    name='Propostas'
                />
                <AppStack.Screen
                    options={{
                        header: ({ navigation }) => Header(navigation)
                    }}
                    component={PropostasAceitas}
                    name='PropostasAceitas'
                />
                <AppStack.Screen
                    options={{
                        header: ({ navigation }) => Header(navigation)
                    }}
                    component={Entregues}
                    name='Entregues'
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default TruckRouter;


const Header = (navigation: any) => {
    return (
        <View style={styles.header}>
            <RectButton onPress={() => navigation.goBack()} style={styles.arrowView}>
                <Icon.MaterialIcons name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'} size={width * 0.08} color='#707070' />
            </RectButton>
            <Image source={FretePago} style={styles.logoHeaderImage} />
            <View style={styles.arrowView} />
        </View>
    )
}