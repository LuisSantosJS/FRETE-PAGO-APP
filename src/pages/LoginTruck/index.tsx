import React, { useEffect } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity, Platform
} from 'react-native';
import styles from './styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';
import KeyboardH from '../../functions/keyboard';
const FretePago = require('../../assets/fretepago.png');
const Email = require('../../assets/email.png');
const Senha = require('../../assets/senha.png');
import {useStatus} from '../../context/ContextAuth'


const LoginTruck: React.FC = () => {
    const navigation = useNavigation();
    const keyboardHeight = KeyboardH();
    const {setStatus} = useStatus()
    const handleRegister = () => {
        navigation.navigate('RegisterTruck')
    }
    useEffect(() => {
        console.log(keyboardHeight)
    }, [keyboardHeight]);

    const onLogin = () => {
        setStatus(2);
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
                        <TouchableOpacity onPress={handleRegister} activeOpacity={0.5}>
                            <Text style={styles.textRegister}>Não possui cadastro?</Text>
                        </TouchableOpacity>
                    </View>}

            </View>
            {Platform.OS === 'ios' &&
                <View style={{ width: '100%', height: keyboardHeight, backgroundColor: 'white' }} />}
        </>
    )
}
export default LoginTruck;