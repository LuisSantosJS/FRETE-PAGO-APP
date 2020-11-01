import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity, Platform
} from 'react-native';
import api from '../../service/api';
import styles from './styles';
import { useLoading } from '../../context/ContextAuth'
import AsyncStorage from '@react-native-community/async-storage';
import * as EmailValidator from 'email-validator';
import Toast from 'react-native-simple-toast';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';
import KeyboardH from '../../functions/keyboard';
const FretePago = require('../../assets/fretepago.png');
const Email = require('../../assets/email.png');
const Senha = require('../../assets/senha.png');
import { useStatus, useToken, useUserData, } from '../../context/ContextAuth';
import { UserDataTruck } from '../../types/truck';


const LoginTruck: React.FC = () => {
    const navigation = useNavigation();
    const keyboardHeight = KeyboardH();
    const { setLoading } = useLoading();
    const { setToken } = useToken();
    const { setUserData } = useUserData();
    const [emailInput, setEmailInput] = useState<string>('');
    const [senhaInput, setSenhaInput] = useState<string>('');
    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
    const { status, setStatus } = useStatus()
    const handleRegister = () => {
        navigation.navigate('RegisterTruck')
    }
    useEffect(() => {
        console.log(keyboardHeight)
    }, [keyboardHeight]);

    const onLogin = () => {
        if (emailInput.length === 0) {
            return Toast.showWithGravity('Insira seu email!', Toast.LONG, Toast.TOP);
        }
        const valueValidEmail = EmailValidator.validate(String(emailInput.toLowerCase()));
        if (!valueValidEmail) {
            return Toast.showWithGravity('Insira um email válido!', Toast.LONG, Toast.TOP);
        }
        if (senhaInput.length === 0) {
            return Toast.showWithGravity('Insira sua senha!', Toast.LONG, Toast.TOP);
        }
        return SumbitAPILogin();
    }

    const SumbitAPILogin = () => {
        if (loadingSubmit) {
            return;
        }
        setLoadingSubmit(true);
        const data = {
            email: emailInput,
            password: senhaInput
        }
        api.post('/truck/users/login', data).then(res => {
            if (res.data.message === 'success') {
                return storeStatus(2, res.data.data, res.data.token);
            } else {
                setLoadingSubmit(false);
                // if (String(res.data.res) === 'User in evaluation or waiting | Usuário em avaliação ou em espera') {
                //     AsyncStorage.setItem('@status', '1').then((res) => {
                //         setStatus(1);
                //     })
                // }
                return Toast.showWithGravity(`${res.data.res}`, Toast.LONG, Toast.TOP);
            }
        }).catch(() => {
            setLoadingSubmit(false);

            return Toast.showWithGravity(`Ocorreu um erro! Tente novamente mais tarde!`, Toast.LONG, Toast.TOP);
        })
    }

    const storeStatus = async (value: number, userData: UserDataTruck, token: string) => {
        const data: UserDataTruck = {
            CPF: userData.CPF,
            account: userData.account,
            accountCPF: userData.accountCPF,
            agency: userData.agency,
            bankNumber:userData.bankNumber,
            bodywork: userData.bodywork,
            bodyworkType: userData.bodyworkType,
            dateOfBirth: userData.dateOfBirth,
            email: userData.email,
            id: userData.id,
            name: userData.name,
            nameAccount: userData.nameAccount,
            numberCNH: userData.numberCNH,
            password: senhaInput,
            status: userData.status,
            telefone: userData.telefone,
            typeBank: userData.typeBank,
            vehicleModel: userData.vehicleModel,
            vehiclePlate: userData.vehiclePlate,
            numberRNTRC: userData.numberRNTRC
        }
        try {
            // await AsyncStorage.setItem('@status', `${value}`);

            await AsyncStorage.setItem('@savedTruck', `${true}`);
            await AsyncStorage.setItem('@truck', `${true}`);
            const jsonValue = JSON.stringify(data);
            await AsyncStorage.setItem('@status', '2');
            await AsyncStorage.setItem('@userData', jsonValue);
            await AsyncStorage.setItem('@token', `${token}`);
            setToken(token);
            setUserData(userData);
            return setStatus(value);
        } catch (e) {
            // saving error
            console.log(e)
        }
        return setLoadingSubmit(false)

    }
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#FD9606' }} />
            <View style={[styles.header, { backgroundColor: '#FD9606' }, styles.shadow]} />
            <View style={styles.container}>
                {keyboardHeight === 0 &&
                    <View style={styles.viewImageCenter}>
                        <Image style={styles.imageLogo} source={FretePago} />
                        <Text style={styles.text}>A maior plataforma de fretes</Text>
                    </View>}
                <View style={[styles.containerInputs, keyboardHeight !== 0 ? { height: '70%' } : {}]}>
                    <View style={styles.viewInputs}>
                        <View style={styles.viewInputLogo}>
                            <Image style={{ width: '50%', height: '50%' }} source={Email} />
                        </View>
                        <TextInput
                            placeholderTextColor='#707070'
                            style={styles.input}
                            value={emailInput}
                            onChangeText={(e) => setEmailInput(e)}
                            placeholder={'Email'}
                            autoCompleteType={'email'}
                            keyboardType={'email-address'}
                        />
                    </View>
                    <View style={styles.viewInputs}>
                        <View style={styles.viewInputLogo}>
                            <Image style={{ width: '50%', height: '50%' }} source={Senha} />
                        </View>
                        <TextInput
                            placeholderTextColor='#707070'
                            style={styles.input}
                            value={senhaInput}
                            onChangeText={(e) => setSenhaInput(e)}
                            autoCapitalize='none'
                            placeholder={'Senha'}
                            secureTextEntry
                        />

                    </View>
                </View>
                {keyboardHeight === 0 &&
                    <View style={styles.viewLoginRegister}>
                        <TouchableOpacity onPress={onLogin} activeOpacity={0.5} style={styles.login}>
                            <Text style={styles.textLogin}>LOGIN</Text>
                        </TouchableOpacity>
                        {status !== 4 &&
                            <TouchableOpacity onPress={handleRegister} activeOpacity={0.5}>
                                <Text style={styles.textRegister}>Não possui cadastro?</Text>
                            </TouchableOpacity>}
                    </View>}

            </View>
            {Platform.OS === 'ios' &&
                <View style={{ width: '100%', height: keyboardHeight, backgroundColor: 'white' }} />}
        </>
    )
}
export default LoginTruck;