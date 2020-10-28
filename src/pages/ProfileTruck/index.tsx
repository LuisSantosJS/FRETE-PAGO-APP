import React from 'react';
import {
    View,
    Dimensions,
    Image,
    Text,
    ScrollView
} from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import faker from 'faker';
import { useStatus } from '../../context/ContextAuth';
import AsyncStorage from '@react-native-community/async-storage';
import { getStatusBarHeight } from 'react-native-status-bar-height'
const Logo = require('../../assets/fretepago.png');
const NotificationIcone = require('../../assets/notification.png')
const HomeIcone = require('../../assets/home.png');
const profile = require('../../assets/profile.png');
const PersonCalendarIcone = require('../../assets/calendar_person.png');
const width = Dimensions.get("window").width;

const ProfileTruck: React.FC = () => {
    faker.locale = 'pt_BR';
    const navigation = useNavigation();
    const { setStatus } = useStatus();


    const onExitAccount = async () => {
        AsyncStorage.clear();
        setStatus(0);
    }
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: 'white' }} />
            <View style={styles.header}>
                <Image resizeMode='contain' style={{ height: '70%' }} source={Logo} />
            </View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerProfilePhoto}>
                        <Image source={{ uri: faker.image.avatar() }} style={[styles.profile, styles.shadow, { borderWidth: 2, borderColor: '#707070' }]} />
                        <Text style={styles.textProfile}>{faker.name.firstName()} {faker.name.lastName()}</Text>
                    </View>
                    <RectButton style={styles.viewRowOptions}>
                        <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                        <Text style={styles.textOptions}>Alterar perfil</Text>
                    </RectButton>
                    <RectButton style={styles.viewRowOptions}>
                        <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                        <Text style={styles.textOptions}>Alterar dados empresa</Text>
                    </RectButton>
                    <RectButton style={styles.viewRowOptions}>
                        <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                        <Text style={styles.textOptions}>Manual de uso</Text>
                    </RectButton>
                    <RectButton style={styles.viewRowOptions}>
                        <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                        <Text style={styles.textOptions}>Sobre</Text>
                    </RectButton>
                    <RectButton onPress={onExitAccount} style={[styles.viewRowOptions, { borderBottomWidth: 1 }]}>
                        <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                        <Text style={styles.textOptions}>Sair</Text>
                    </RectButton>


                </View>
            </ScrollView>
            <View style={styles.tapBar}>
                <RectButton onPress={() => navigation.navigate('ProfileTruck')} style={styles.buttonTab}>
                    <Image style={{ height: '50%' }} resizeMode='contain' source={PersonCalendarIcone} />
                </RectButton>
                <RectButton onPress={() => navigation.goBack()} style={styles.buttonTab}>
                    <Image style={{ height: '80%' }} resizeMode='contain' source={HomeIcone} />
                </RectButton>
                <RectButton onPress={() => navigation.navigate('NotificationTruck')} style={styles.buttonTab}>
                    <Image style={{ height: '80%' }} resizeMode='contain' source={NotificationIcone} />
                </RectButton>
            </View>
        </>
    )
}
export default ProfileTruck;