import React, { useEffect, useState } from 'react';
import {
    View,
    Animated,
    Image,
    Platform,
    Text
} from 'react-native';
import api from '../../service/api';
import AsyncStorage from '@react-native-community/async-storage';
import { useLoading, useStatus, useToken, useUserData } from '../../context/ContextAuth'
import styles from './styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { UserDataTruck } from '../../types/truck';
const Logo = require('../../assets/fretepago.png')
const Loading = require('../../assets/lottie/loading.gif');
const LoadingPage: React.FC = () => {
    const { loading, setLoading } = useLoading();
    const { status, setStatus } = useStatus();
    const { token, setToken } = useToken();
    const { userData, setUserData } = useUserData();
    useEffect(() => {
        getStatus();
    }, []);

    const getStatus = async () => {
        try {
            const value = await AsyncStorage.getItem('@status');
            console.log('status save:', value)
            const truck = await AsyncStorage.getItem('@truck');
            console.log('truck:', truck)
            if (value !== null) {
                if (Boolean(truck) === true) {
                    if (Number(value) === 1) {
                        getDataUser();
                    }
                    if (Number(value) === 2) {
                        loginUser()
                    }
                }
                else {
                    /// empresa
                }
            }
            else {
                return setLoading(false)
            }

        } catch (e) {
            // error reading value
        }

    }

    const loginUser = async () => {
        const value = await AsyncStorage.getItem('@userData');
        if (value !== null) {
            const jsonValue: UserDataTruck = JSON.parse(value);
            api.get(`/truck/users/status?email=${jsonValue.email}`).then((res) => {
                if (String(res.data.status) === 'active') {
                    setStatus(2);
                    setLoading(false)
                } else {
                    setStatus(1);
                    setLoading(false);
                }
            }).catch(() => {
                setStatus(1);
                setLoading(false);
            })
        }
    }
    // const finish = () => {
    //     setInterval(() => setLoading(false), 2500);
    // }

    const getDataUser = async () => {
        try {
            const value = await AsyncStorage.getItem('@userData');
            console.log('@userData', value)
            if (value !== null) {
                const jsonValue: UserDataTruck = JSON.parse(value);
                getInfoUsetTruck(jsonValue);
            } else {
                setStatus(1);
                setLoading(false);
            }
        } catch (error) {

        }

    }


    const getInfoUsetTruck = (value: UserDataTruck) => {
        api.get(`/truck/users/status?email=${value.email}`).then((res) => {
            if (String(res.data.status) === 'pending') {
                setStatus(1);
                setLoading(false);
            }
            if (String(res.data.status) === 'active') {
                AsyncStorage.setItem('@status', '2').then(() => {
                    setStatus(2);
                    setUserData(value);
                    setLoading(false);
                })
            }
        }).catch(() => {
            setStatus(1);
            setLoading(false);
        })
    }



    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: 'white' }} />
            <View style={styles.container}>
                <View style={styles.viewCenter}>
                    <Image style={{ height: '20%', maxWidth: '50%' }} source={Logo} />
                    <Image style={{ height: '25%', maxWidth: '35%' }} source={Loading} />
                    <Text style={{ color: '#141414', fontSize: 22, textAlign: 'center' }}>Algumas funcionalidades estão indisponíveis</Text>
                </View>

            </View>
        </>
    )
}
export default LoadingPage;