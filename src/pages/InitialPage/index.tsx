import React from 'react';
import {
    View,
    Image,
    Text
} from 'react-native';
import styles from './styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const FretePago = require('../../assets/fretepago.png')
const InitialPage: React.FC = () => {
    const navigation = useNavigation();
    const handleLoginCaminhoneiro = () => {
        navigation.navigate('LoginTruck');
    }
    const handleLoginCompany = () => {
        navigation.navigate('BeforeLoginCompany');
    }
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#FD9606' }} />
            <View style={[styles.header, { backgroundColor: '#FD9606' }, styles.shadow]} />
            <View style={styles.container}>
                <View style={styles.viewImageCenter}>
                    <Image style={styles.imageLogo} source={FretePago} />
                    <Text style={styles.text}>A maior plataforma de fretes</Text>
                </View>
            </View>
            <View style={styles.barTab}>
                <RectButton onPress={handleLoginCaminhoneiro} style={[styles.buttomTabBar, { backgroundColor: '#000000' }]}>
                    <Text style={styles.textButtomTab}>Sou Caminhoneiro</Text>
                </RectButton>
                <RectButton onPress={handleLoginCompany} style={[styles.buttomTabBar, { backgroundColor: '#FD9606' }]}>
                    <Text style={styles.textButtomTab}>Sou Empresa</Text>
                </RectButton>
            </View>
        </>
    )
}
export default InitialPage;