import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';

const NotificationIcone = require('../../assets/notification.png')
const HomeIcone = require('../../assets/home.png');
const PersonCalendarIcone = require('../../assets/calendar_person.png');
const fretePago = require('../../assets/fretepago.png');
const curvas = require('../../assets/curvas.png');
const profile = require('../../assets/profile.png');
const ProfileCompany: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: 'white' }} />
            <View style={styles.headerLogoView}>
                <Image source={fretePago} resizeMode='contain' style={{ height: '100%' }} />
            </View>
            <View style={styles.container}>
                <Image source={curvas} resizeMode='stretch' style={{ width: '100%' }} />
                <View style={styles.viewRowOptions}>
                    <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                    <Text style={styles.textOptions}>Alterar perfil</Text>
                </View>
                <View style={styles.viewRowOptions}>
                    <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                    <Text style={styles.textOptions}>Alterar dados empresa</Text>
                </View>
                <View style={styles.viewRowOptions}>
                    <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                    <Text style={styles.textOptions}>Manual de uso</Text>
                </View>
                <View style={styles.viewRowOptions}>
                    <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                    <Text style={styles.textOptions}>Sobre</Text>
                </View>
                <View style={[styles.viewRowOptions, { borderBottomWidth: 1 }]}>
                    <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                    <Text style={styles.textOptions}>Sair</Text>
                </View>

            </View>

            <View style={styles.tapBar}>
                <RectButton style={styles.buttonTab}>
                    <Image style={{ height: '50%' }} resizeMode='contain' source={PersonCalendarIcone} />
                </RectButton>
                <RectButton onPress={()=> navigation.goBack()} style={styles.buttonTab}>
                    <Image style={{ height: '80%' }} resizeMode='contain' source={HomeIcone} />
                </RectButton>
                <RectButton onPress={() => navigation.navigate('NotificationCompany')} style={styles.buttonTab}>
                    <Image style={{ height: '80%' }} resizeMode='contain' source={NotificationIcone} />
                </RectButton>
            </View>
        </>
    )
}
export default ProfileCompany;