import React, { useState } from 'react';
import {
    View,
    Dimensions,
    Image,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Dialog from "react-native-dialog";
import styles from './styles';
import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import faker from 'faker';
//@ts-ignore
import ImgToBase64 from 'react-native-image-base64';
import { useStatus, useUserData, useToken } from '../../context/ContextAuth';
import api from '../../service/api';
import Toast from 'react-native-simple-toast'
import AsyncStorage from '@react-native-community/async-storage';
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { UserDataTruck2 } from '../../types/truck';
const Logo = require('../../assets/fretepago.png');
const NotificationIcone = require('../../assets/notification.png')
const HomeIcone = require('../../assets/home.png');
const profile = require('../../assets/profile.png');
const PersonCalendarIcone = require('../../assets/calendar_person.png');
const width = Dimensions.get("window").width;
const NotAvatar = require('../../assets/notAvatar.png');
var options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
const ProfileTruck: React.FC = () => {
    faker.locale = 'pt_BR';
    const { token } = useToken();
    const navigation = useNavigation();
    const { setStatus } = useStatus();
    const { userData, setUserData } = useUserData();
    const [modalSairVisible, setModalSairVisible] = useState<boolean>(false);
    const onExitAccount = async () => {
        AsyncStorage.clear();
        setStatus(0);
    }

    const onGetImage = () => {
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                return;
            }
            if (response.error) {
                return;
            }
            return onConvertImage(response);
        });
    }

    const onConvertImage = (image: ImagePickerResponse) => {
        console.log('size', image)
        ImgToBase64.getBase64String(image.uri)
            .then((base64String: string) => onUpdateProfile(base64String))
            .catch((err: any) => console.log(err));
    }

    const onUpdateProfile = (avatar: string) => {
        console.log('base64', avatar)
        const config = {
            headers: {
                'x-access-token': `${token}`
            }
        }
        api.post('/truck/users/avatar/update', {
            avatar: avatar,
            email: String(userData.email)
        }, config).then(res => {
            if (res.data.message === 'success') {
                setUserData({ ...userData, avatar: avatar });
                return Toast.showWithGravity(`${res.data.res}`, Toast.LONG, Toast.TOP);

            }
            console.log(res.data)

        }).catch(e => console.log(e))
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
                        <TouchableOpacity onPress={onGetImage}>
                            <Image resizeMode='contain' source={String(userData.avatar).length === 0 ? NotAvatar : { uri: String('data:image/png;base64,' + String(userData.avatar)) }} style={[styles.profile, styles.shadow, { borderWidth: 2, borderColor: '#707070' }]} />
                        </TouchableOpacity>
                        <Text style={styles.textProfile}>{userData.name}</Text>
                    </View>
                    <RectButton onPress={() => navigation.navigate('AlterarPerfil')} style={styles.viewRowOptions}>
                        <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                        <Text style={styles.textOptions}>Alterar perfil</Text>
                    </RectButton>
                    <RectButton onPress={() => navigation.navigate('ManualUsoTruck')} style={styles.viewRowOptions}>
                        <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                        <Text style={styles.textOptions}>Manual de uso</Text>
                    </RectButton>
                    <RectButton onPress={() => navigation.navigate('Sobre')} style={styles.viewRowOptions}>
                        <Image source={profile} resizeMode='contain' style={{ height: '80%' }} />
                        <Text style={styles.textOptions}>Sobre</Text>
                    </RectButton>
                    <RectButton onPress={() => setModalSairVisible(true)} style={[styles.viewRowOptions, { borderBottomWidth: 1 }]}>
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
            <Dialog.Container visible={modalSairVisible}>
                <Dialog.Title>Tem certeza que deseja sair?</Dialog.Title>
                <Dialog.Button onPress={() => setModalSairVisible(false)} label="  Cancelar  " />
                <Dialog.Button onPress={() => onExitAccount()} label="  Sair  " />
            </Dialog.Container>
        </>
    )
}
export default ProfileTruck;