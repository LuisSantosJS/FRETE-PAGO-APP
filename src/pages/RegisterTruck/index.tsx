import React, { useState, useEffect, useCallback } from 'react';
import {
    Text,
    View,
    Dimensions,
    Platform,
    TextInput
} from 'react-native';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import { bancos } from '../../JSON/bancos';
import AsyncStorage from '@react-native-community/async-storage';
//@ts-ignore
import { mask } from 'remask';
import Toast from 'react-native-simple-toast';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import KeyboardH from '../../functions/keyboard';
import { useStatus } from '../../context/ContextAuth'
import * as EmailValidator from 'email-validator';
import { RectButton } from 'react-native-gesture-handler';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const RegisterTruck: React.FC = () => {
    const [stageProgress, setStageProgress] = useState<number>(0);
    const [stageProgressInputs, setStageProgressInputs] = useState<number>(0);
    const [progressTitle, setProgressTitle] = useState<string>('DADOS PESSOAIS');
    const keyboardHeight = KeyboardH();
    const { setStatus } = useStatus()
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
    const [visibleTerms, setVisibleTerms] = useState<boolean>(false);

    const [name, setName] = useState<string>('');
    const onChangeName = useCallback((e: string) => {
        setName(e);
    }, []);

    const [email, setEmail] = useState<string>('');
    const onChangeEmail = useCallback((e: string) => {
        setEmail(e);
    }, []);

    const [password, setPassword] = useState<string>('');
    const onPassword = useCallback((e: string) => {
        setPassword(e);
    }, []);

    const [telefone, setTelefone] = useState<string>('');
    const onTelefone = useCallback((e: string) => {
        const masked: string = mask(e, ['99 9999-9999', '99 99999-9999']);
        setTelefone(masked);
    }, []);

    const [cpf, setCpf] = useState<string>('');
    const onCpf = useCallback((e: string) => {
        const maskedCPF: string = mask(e, ['999.999.999-99']);
        setCpf(maskedCPF);
    }, []);

    const [nascimento, setNascimento] = useState<string>('');
    const onNascimento = useCallback((e: string) => {
        const masked: string = mask(e, '99/99/9999');
        setNascimento(masked);
    }, []);
    useEffect(() => {
    }, [keyboardHeight]);


    const RenderInputs = () => {
        switch (stageProgressInputs) {
            case 0:
                return <>
                    <TextInput
                        style={styles.inputs}
                        value={name}
                        onChangeText={e => onChangeName(e)}
                        placeholder={'Nome completo'} />
                    <TextInput
                        style={styles.inputs}
                        value={email}
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        autoCorrect={false}
                        autoCompleteType='email'
                        onChangeText={e => onChangeEmail(e)}
                        placeholder={'Email'} />
                    <TextInput
                        style={styles.inputs}
                        value={password}
                        secureTextEntry
                        autoCapitalize='none'
                        onChangeText={e => onPassword(e)}
                        placeholder={'Senha'} />
                </>;
            case 1:
                return <>
                    <TextInput
                        style={styles.inputs}
                        value={telefone}
                        keyboardType='number-pad'
                        onChangeText={(e) => onTelefone(e)}
                        placeholder={'Telefone'} />
                    <TextInput
                        style={styles.inputs}
                        autoCapitalize='none'
                        value={cpf}
                        onChangeText={e => onCpf(e)}
                        keyboardType='decimal-pad'
                        placeholder={'CPF'} />
                    <TextInput
                        style={styles.inputs}
                        value={nascimento}
                        keyboardType='decimal-pad'
                        onChangeText={(e) => onNascimento(e)}
                        placeholder={'Data de Nascimento'} />
                </>;
            case 2:
                return <>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Selecione seu banco'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Tipo de conta'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Agência'}
                        keyboardType='decimal-pad'
                    />

                </>;
            case 3:
                return <>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Número da conta'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Titular'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'CPF TITULAR'}
                        keyboardType='decimal-pad'
                    />

                </>;
            case 4:
                return <>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Nome do veículo'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Placa do veículo'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Número RNTRC'}

                    />

                </>
            case 5:
                return <>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Carroceria'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Tipo'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Número da CNH'}

                    />

                </>
        }
    }
    const submit = () => {
        switch (stageProgress) {
            case 0:
                return vefific0();
            case 1:
                return vefific1();
            case 2:
                return vefific2();
        }
    }

    const verInputs0 = () => {
        if (name.length <= 6) {
            return Toast.showWithGravity('Preencha seu nome completo!', Toast.LONG, Toast.TOP);
        }
        if (email.length === 0) {
            return Toast.showWithGravity('Preencha o campo email!', Toast.LONG, Toast.TOP);
        }
        const isValidEmail = EmailValidator.validate(email);
        if (!isValidEmail) {
            return Toast.showWithGravity('Email inválido!', Toast.LONG, Toast.TOP);
        }
        if (password.length < 6) {
            return Toast.showWithGravity('A senha precisa ter no minímo 6 digitos!', Toast.LONG, Toast.TOP);
        }
        setStageProgressInputs(1);

    }
    const verInputs1 = () => {
        if (telefone.length <= 10) {
            return Toast.showWithGravity('Insira seu número de telefone por completo!', Toast.LONG, Toast.TOP);
        }
        if (cpf.length < 14) {
            return Toast.showWithGravity('Insira seu CPF por completo!', Toast.LONG, Toast.TOP);
        }
        if (nascimento.length < 10) {
            return Toast.showWithGravity('Insira sua data de nascimento por completo!', Toast.LONG, Toast.TOP);
        }
        setStageProgress(1);
        setStageProgressInputs(2);
        setProgressTitle('DADOS BANCÁRIOS')

    }
    const verInputs2 = () => {
        //
        setStageProgressInputs(3)
    }

    const verInputs3 = () => {
        setStageProgressInputs(4)
        setStageProgress(2)

    }
    const verInputs4 = () => {
        setStageProgressInputs(5)
        setVisibleTerms(true);
    }

    const verInputs5 = () => {
        if(!toggleCheckBox){
            return Toast.showWithGravity('Aceite os termos!', Toast.LONG, Toast.TOP);
        }
       // setStatus(1)
       return storeStatus(1)

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


    const vefific0 = () => {
        switch (stageProgressInputs) {
            case 0:
                return verInputs0();
            case 1:
                return verInputs1();
        }
    }
    const vefific1 = () => {
        switch (stageProgressInputs) {
            case 2:
                return verInputs2();
            case 3:
                return verInputs3();
        }

    }
    const vefific2 = () => {
        switch (stageProgressInputs) {
            case 4:
                return verInputs4();
            case 5:
                return verInputs5();
        }
    }

    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: 'white' }} />
            <View style={styles.container}>
                {keyboardHeight === 0 && <View style={styles.progressView}>
                    <Text style={styles.titleProgress}>{progressTitle}</Text>
                    <View style={styles.progessBar}>
                        <View style={{ height: '100%', width: '50%', backgroundColor: stageProgress >= 1 ? '#FD9606' : '#707070' }}>
                            <View style={[styles.pointProgress, { left: -(width * 0.07) / 2, backgroundColor: '#FD9606' }]} />
                        </View>
                        <View style={{ height: '100%', width: '50%', backgroundColor: stageProgress === 2 ? '#FD9606' : '#707070', flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={[styles.pointProgress, { left: -(width * 0.07) / 2, backgroundColor: stageProgress >= 1 ? '#FD9606' : '#707070' }]} />
                            <View style={[styles.pointProgress, { left: (width * 0.07) / 2, backgroundColor: stageProgress === 2 ? '#FD9606' : '#707070' }]} />
                        </View>
                    </View>
                </View>}
                <View style={styles.ViewsInputs}>
                    {RenderInputs()}
                    {visibleTerms &&
                        <View style={{ width: '70%', height: width * 0.2, alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                            <CheckBox
                                disabled={false}
                                value={toggleCheckBox}
                                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            />
                            <Text style={styles.termsText}>
                                Li e concordo com os termos
                            </Text>
                        </View>}
                </View>
            </View>
            {Platform.OS === 'ios' &&
                <View style={{ width: '100%', height: keyboardHeight, backgroundColor: 'white' }} />}
            {  keyboardHeight === 0 && <View style={styles.viewButton}>
                <RectButton onPress={submit} style={styles.submit}>
                    <Text style={styles.textSubmit}>PRÓXIMO</Text>
                </RectButton>
            </View>}
        </>
    )
}
export default RegisterTruck;