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
    const { setLoading } = useLoading();
    const { setStatus } = useStatus();
    const { setToken } = useToken();
    const { setUserData } = useUserData();

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
                if(Number(value) === 0){
                    return setLoading(false)
                }
                if (Number(value) === 1) {
                    getDataUser();
                }
                if (Number(value) === 2) {
                    loginUser()
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
        const tokens = await AsyncStorage.getItem('@token');
        console.log('login user = > userData', value);
        console.log('login user = > token', tokens)
        if (value !== null) {
            const jsonValue: UserDataTruck = JSON.parse(value);
            setToken(String(tokens))
            api.get(`/truck/users/status?email=${jsonValue.email}`).then((res) => {
                if (String(res.data.status) === 'active') {
                    api.post('/truck/users/login', {
                        email: String(jsonValue.email).toLowerCase(),
                        password: String(jsonValue.password)
                    }).then((res) => {
                        console.log('response LoginUser', res.data)
                        if (res.data.message === 'success') {
                            AsyncStorage.setItem('@token', String(res.data.token)).then(() => {
                                setToken(res.data.token);
                                setStatus(2);
                                setUserData(jsonValue)
                                setLoading(false)
                            })
                        } else {
                            AsyncStorage.setItem('@status', '0').then(() => {
                                setStatus(0);
                                setLoading(false);
                            })
                        }

                    }).catch(() => {
                        setStatus(0);
                        setLoading(false);
                    })

                } else {
                    setStatus(0);
                    setLoading(false);
                }
            }).catch(() => {
                setStatus(0);
                setLoading(false);
            })
        } else {
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
                setStatus(0);
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
                api.post('/truck/users/login', {
                    email: String(value.email).toLowerCase(),
                    password: String(value.password)
                }).then((ress => {
                    if (ress.data.message === 'success') {
                        setToken(ress.data.token);
                        console.log('token:', ress.data.token)
                        AsyncStorage.setItem('@status', '2').then(() => {
                            setStatus(2);
                            setUserData(value);
                            setLoading(false);
                        })
                    } else {
                        setStatus(0);
                        setLoading(false);
                    }
                })).catch(() => {
                    setStatus(0);
                    setLoading(false);
                })
            }
        }).catch(() => {
            setStatus(0);
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