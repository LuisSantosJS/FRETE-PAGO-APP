import React, { useState, useEffect, useCallback } from 'react';
import {
    Text,
    View,
    Dimensions,
    Platform,
    TextInput,
    FlatList,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import styles from './styles';
import CheckBox from '@react-native-community/checkbox';
import BottomSheet from 'reanimated-bottom-sheet';
import { bancos, Bank } from '../../JSON/bancos';
import AsyncStorage from '@react-native-community/async-storage';
//@ts-ignore
import { mask } from 'remask';
import api from '../../service/api';
import faker from 'faker';
import Toast from 'react-native-simple-toast';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import KeyboardH from '../../functions/keyboard';
import { useStatus } from '../../context/ContextAuth'
import * as EmailValidator from 'email-validator';
import { RectButton } from 'react-native-gesture-handler';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const BANCOS: Bank[] = bancos;
const TIPOCONTA: string[] = [
    'Corrente',
    'Poupança'
]

const RegisterTruck: React.FC = () => {
    const [stageProgress, setStageProgress] = useState<number>(0);
    const [stageProgressInputs, setStageProgressInputs] = useState<number>(0);
    const [progressTitle, setProgressTitle] = useState<string>('DADOS PESSOAIS');
    const keyboardHeight = KeyboardH();
    const { setStatus } = useStatus()
    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false);
    const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
    const [visibleTerms, setVisibleTerms] = useState<boolean>(false);
    const [selectBank, setSelectBank] = useState<Bank>({ label: 'Selecionar Banco', value: '0' })
    const [tipoConta, setTipoConta] = useState<string>('Tipo da Conta');

    const sheetRefBancos = React.useRef<any>();
    const sheetRefTipoConta = React.useRef<any>();

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

    const [accountCPF, setAccountCPF] = useState<string>('');
    const onAccountCPF = useCallback((e: string) => {
        const maskedCPF: string = mask(e, ['999.999.999-99']);
        setAccountCPF(maskedCPF);
    }, []);

    const [bodywork, setBodywork] = useState<string>('');
    const onBodyWork = useCallback((e: string) => {
        setBodywork(e)
    }, []);

    const [numberRNTRC, setNumberRNTRC] = useState<string>('');
    const onNumberRNTRC = useCallback((e: string) => {
        setNumberRNTRC(e);
    }, []);

    const [vehiclePlate, setVehiclePlate] = useState<string>('');
    const onVehiclePlate = useCallback((e: string) => {
        setVehiclePlate(e)
    }, [])

    const [vehicleModel, setVehicleModel] = useState<string>('');
    const onVehicleModel = useCallback((e: string) => {
        setVehicleModel(e)
    }, []);

    const [nameAccount, setNameAccount] = useState<string>('');
    const onNameAccount = useCallback((e: string) => {
        setNameAccount(e);
    }, [])

    const [agency, setAgency] = useState<string>('');
    const onAgency = useCallback((e: string) => {
        setAgency(e);
    }, [])

    const [account, setAccount] = useState<string>('');
    const onAccount = useCallback((e: string) => {
        setAccount(e);
    }, []);

    const [bodyworkType, setBodyworkType] = useState<string>('');
    const onBodyWorkType = useCallback((e: string) => {
        setBodyworkType(e);
    }, []);

    const [numberCNH, setNumberCNH] = useState<string>('');
    const onNumberCNH = useCallback((e: string) => {
        setNumberCNH(e);
    }, [])

    useEffect(() => {
    }, [keyboardHeight]);


    const RenderInputs = () => {
        switch (stageProgressInputs) {
            case 0:
                return <>
                    <TextInput
                        style={styles.inputs}
                        placeholderTextColor={'#8e8e8e'}
                        value={name}
                        onChangeText={e => onChangeName(e)}
                        placeholder={'Nome completo'} />
                    <TextInput
                        style={styles.inputs}
                        placeholderTextColor={'#8e8e8e'}
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
                        placeholderTextColor={'#8e8e8e'}
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
                        placeholderTextColor={'#8e8e8e'}
                        onChangeText={(e) => onTelefone(e)}
                        placeholder={'Telefone'} />
                    <TextInput
                        style={styles.inputs}
                        autoCapitalize='none'
                        value={cpf}
                        onChangeText={e => onCpf(e)}
                        placeholderTextColor={'#8e8e8e'}
                        keyboardType='decimal-pad'
                        placeholder={'CPF'} />
                    <TextInput
                        style={styles.inputs}
                        value={nascimento}
                        keyboardType='decimal-pad'
                        onChangeText={(e) => onNascimento(e)}
                        placeholderTextColor={'#8e8e8e'}
                        placeholder={'Data de Nascimento'} />
                </>;
            case 2:
                return <>

                    <RectButton onPress={() => sheetRefBancos.current.snapTo(1)} style={styles.inputs}>
                        <Text style={styles.textItemINput}>{selectBank.label}</Text>
                    </RectButton>
                    <RectButton style={styles.inputs} onPress={() => sheetRefTipoConta.current.snapTo(1)}>
                        <Text style={styles.textItemINput}>{tipoConta}</Text>
                    </RectButton>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Agência'}
                        value={agency}
                        onChangeText={(e) => onAgency(e)}
                        keyboardType='decimal-pad'
                        placeholderTextColor={'#8e8e8e'}
                    />

                </>;
            case 3:
                return <>
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Número da conta'}
                        value={account}
                        onChangeText={(e) => onAccount(e)}
                        placeholderTextColor={'#8e8e8e'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Titular'}
                        value={nameAccount}
                        onChangeText={(e) => onNameAccount(e)}
                        placeholderTextColor={'#8e8e8e'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'CPF TITULAR'}
                        value={accountCPF}
                        onChangeText={(e) => onAccountCPF(e)}
                        placeholderTextColor={'#8e8e8e'}
                        keyboardType='decimal-pad'
                    />

                </>;
            case 4:
                return <>
                    <TextInput
                        style={styles.inputs}
                        value={vehicleModel}
                        onChangeText={(e) => onVehicleModel(e)}
                        placeholder={'Nome do veículo'}
                        placeholderTextColor={'#8e8e8e'}
                    />
                    <TextInput
                        style={styles.inputs}
                        value={vehiclePlate}
                        onChangeText={(e) => onVehiclePlate(e)}
                        placeholder={'Placa do veículo'}
                        placeholderTextColor={'#8e8e8e'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Número RNTRC'}
                        value={numberRNTRC}
                        onChangeText={(e) => onNumberRNTRC(e)}
                        placeholderTextColor={'#8e8e8e'}

                    />

                </>
            case 5:
                return <>
                    <TextInput
                        style={styles.inputs}
                        value={bodywork}
                        onChangeText={(e) => onBodyWork(e)}
                        placeholder={'Carroceria'}
                        placeholderTextColor={'#8e8e8e'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Tipo'}
                        value={bodyworkType}
                        onChangeText={(e) => onBodyWorkType(e)}
                        placeholderTextColor={'#8e8e8e'}
                    />
                    <TextInput
                        style={styles.inputs}
                        placeholder={'Número da CNH'}
                        value={numberCNH}
                        onChangeText={(e) => onNumberCNH(e)}
                        placeholderTextColor={'#8e8e8e'}

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
        if (selectBank.value === '0') {
            return Toast.showWithGravity('Selecione seu banco!', Toast.LONG, Toast.TOP);
        }
        if (tipoConta === 'Tipo da Conta') {
            return Toast.showWithGravity('Selecione o tipo da conta!', Toast.LONG, Toast.TOP);
        }
        if (agency.length === 0) {
            return Toast.showWithGravity('Digite sua agência!', Toast.LONG, Toast.TOP);
        }
        //
        setStageProgressInputs(3)
    }

    const verInputs3 = () => {
        if (account.length === 0) {
            return Toast.showWithGravity('Digite o número da conta!', Toast.LONG, Toast.TOP);
        }
        if (nameAccount.length === 0) {
            return Toast.showWithGravity('Digite o nome do titular da conta!', Toast.LONG, Toast.TOP);
        }
        if (accountCPF.length === 0) {
            return Toast.showWithGravity('Digite o CPF do titular', Toast.LONG, Toast.TOP);
        }
        setStageProgressInputs(4)
        setStageProgress(2)

    }
    const verInputs4 = () => {
        if (vehicleModel.length === 0) {
            return Toast.showWithGravity('Digite o modelo do veículo!', Toast.LONG, Toast.TOP);
        }
        if (vehiclePlate.length === 0) {
            return Toast.showWithGravity('Digite a placa do veículo', Toast.LONG, Toast.TOP);
        }
        if (numberRNTRC.length === 0) {
            return Toast.showWithGravity('Digite o número RNTRC', Toast.LONG, Toast.TOP);
        }
        setStageProgressInputs(5)
        setVisibleTerms(true);
    }

    const verInputs5 = () => {
        if (bodywork.length === 0) {
            return Toast.showWithGravity('Digite a carroceria!', Toast.LONG, Toast.TOP);
        }
        if (bodyworkType.length === 0) {
            return Toast.showWithGravity('Digite o tipo da carroceria!', Toast.LONG, Toast.TOP);
        }
        if (numberCNH.length === 0) {
            return Toast.showWithGravity('Digite o número da sua CNH!', Toast.LONG, Toast.TOP);
        }
        if (!toggleCheckBox) {
            return Toast.showWithGravity('Aceite os termos!', Toast.LONG, Toast.TOP);
        }
        return HandleSubmitForm()
    }

    const HandleSubmitForm = () => {
        if (loadingSubmit) {
            return;
        }
        setLoadingSubmit(true);
        const data = {
            name,
            email,
            password,
            telefone,
            CPF: cpf,
            dateOfBirth: nascimento,
            bankNumber: selectBank.value,
            typeBank: tipoConta,
            agency,
            account,
            nameAccount,
            accountCPF,
            vehicleModel,
            vehiclePlate,
            numberRNTRC,
            bodywork,
            bodyworkType,
            numberCNH
        };
        api.post('/users/create', data).then(res => {
            if (res.data.message === 'success') {
                return storeStatus();
            }
            return Toast.showWithGravity(`${res.data.res}`, Toast.LONG, Toast.TOP)
        }).catch(() => {
            return Toast.showWithGravity('Ocorreu um Erro! Tente novamente mais tarde!', Toast.LONG, Toast.TOP)
        })
    }
    const storeStatus = async () => {
        const value = 1;
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


    const RenderBancos = (item: Bank, index: number) => {
        return (
            <>
                <TouchableOpacity onPress={() => {
                    setSelectBank(item);
                    sheetRefBancos.current.snapTo(0);
                    console.log(item)
                }} key={index} style={styles.viewRowItem}>
                    <Text style={styles.textitemBanco}>{item.label}</Text>
                </TouchableOpacity>
            </>
        )
    }
    const RenderOptionsConta = (item: string, index: number) => {
        return (
            <>
                <TouchableOpacity onPress={() => {
                    setTipoConta(item);
                    sheetRefTipoConta.current.snapTo(0);
                    console.log(item)
                }} key={index} style={styles.viewRowItem}>
                    <Text style={styles.textitemBanco}>{item}</Text>
                </TouchableOpacity>
            </>
        )
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
                    {loadingSubmit ?
                        <ActivityIndicator size='large' color='white' /> :
                        <Text style={styles.textSubmit}>PRÓXIMO</Text>}
                </RectButton>
            </View>}
            <BottomSheet
                ref={sheetRefBancos}
                snapPoints={[0, Number(height - ((width * 0.17) + getStatusBarHeight(true)))]}
                borderRadius={10}
                renderContent={() => {
                    return (
                        <View
                            style={{
                                backgroundColor: '#f7f7f7',
                                padding: 16,
                                minHeight: (height - ((width * 0.147) + getStatusBarHeight(true))),
                                maxHeight: undefined
                            }}>
                            <View style={styles.viewDownShet}>
                                <View style={styles.buttonMInChet} />
                            </View>
                            <FlatList
                                data={BANCOS}
                                showsVerticalScrollIndicator={false}
                                style={{ width: '100%', height: '100%' }}
                                ItemSeparatorComponent={() => <View style={styles.separateItem} />}
                                renderItem={({ item, index }: { item: Bank, index: number }) => RenderBancos(item, index)}
                                keyExtractor={({ item, index }: any) => String(faker.random.alphaNumeric(21))}
                            />
                        </View>
                    )
                }}
            />

            <BottomSheet
                ref={sheetRefTipoConta}
                snapPoints={[0, Number(height - ((width * 0.17) + getStatusBarHeight(true)))]}
                borderRadius={10}
                renderContent={() => {
                    return (
                        <View
                            style={{
                                backgroundColor: '#f7f7f7',
                                padding: 16,
                                minHeight: (height - ((width * 0.147) + getStatusBarHeight(true))),
                                maxHeight: undefined
                            }}>
                            <View style={styles.viewDownShet}>
                                <View style={styles.buttonMInChet} />
                            </View>
                            <FlatList
                                data={TIPOCONTA}
                                showsVerticalScrollIndicator={false}
                                style={{ width: '100%', height: '100%' }}
                                ItemSeparatorComponent={() => <View style={styles.separateItem} />}
                                renderItem={({ item, index }: { item: string, index: number }) => RenderOptionsConta(item, index)}
                                keyExtractor={({ item, index }: any) => String(faker.random.alphaNumeric(21))}
                            />
                        </View>
                    )
                }}
            />
        </>
    )


}
export default RegisterTruck;