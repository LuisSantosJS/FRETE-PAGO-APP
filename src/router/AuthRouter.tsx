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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InitialPage from '../pages/InitialPage';
import LoginTruck from '../pages/LoginTruck';
import RegisterTruck from '../pages/RegisterTruck';
import { RectButton } from 'react-native-gesture-handler';
const AppStack = createStackNavigator();
const FretePago = require('../assets/fretepago.png');
const width = Dimensions.get("window").width;


const AuthRouter: React.FC = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" backgroundColor='#191919' />
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
                        header: ({ navigation }) =>
                            <View style={styles.header}>
                                <RectButton onPress={() => navigation.goBack()} style={styles.arrowView}>
                                    <Icon.MaterialIcons name={Platform.OS === 'ios' ? 'arrow-back-ios' : 'arrow-back'} size={width * 0.08} color='#707070' />
                                </RectButton>
                                <Image source={FretePago} style={styles.logoHeaderImage} />
                                <View style={styles.arrowView} />
                            </View>
                    }}
                    component={RegisterTruck}
                    name='RegisterTruck'
                />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
export default AuthRouter;