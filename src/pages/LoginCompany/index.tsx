import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity, Platform
} from 'react-native';

import * as EmailValidator from 'email-validator';
import Toast from 'react-native-simple-toast';
import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';
import KeyboardH from '../../functions/keyboard';
const FretePago = require('../../assets/fretepago.png');
const Email = require('../../assets/email.png');
const Senha = require('../../assets/senha.png');
import { useStatus } from '../../context/ContextAuth'


const LoginCompany: React.FC = () => {
    const navigation = useNavigation();
    const keyboardHeight = KeyboardH();
    const [emailInput, setEmailInput] = useState<string>('');
    const [senhaInput, setSenhaInput] = useState<string>('');
    const { setStatus } = useStatus()
    const handleRegister = () => {

    }
    useEffect(() => {
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
        if ((String(emailInput).toLowerCase() !== 'teste@email.com') && (String(senhaInput) !== 'testesenha')) {
            return Toast.showWithGravity('Usuário não existe!', Toast.LONG, Toast.TOP);
        }
        storeStatus(3);
    }



    const storeStatus = async (value: number) => {
        try {
            await AsyncStorage.setItem('@status', `${value}`);
            return setStatus(value);
        } catch (e) {
            // saving error
            console.log(e)
        }

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
                    </View>}
            </View>
            {Platform.OS === 'ios' &&
                <View style={{ width: '100%', height: keyboardHeight, backgroundColor: 'white' }} />}
        </>
    )
}
export default LoginCompany;