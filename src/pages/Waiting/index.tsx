import React from 'react';
import {
    Image,
    Text,
    View
} from 'react-native';
import styles from './styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const Logo = require('../../assets/fretepago.png');
const Success = require('../../assets/lottie/success.gif');
const Waiting: React.FC = () => {
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: 'white' }} />
            <View style={[styles.header, { backgroundColor: 'white' }, styles.shadow]} >
                <Image source={Logo} style={styles.logoHeaderImage} />
            </View>
            <View style={styles.container}>
                <View style={styles.centerView}>
                    <Image style={{ height: '34%', maxWidth: '25%' }} source={Success} />
                    <Text style={styles.titleText}>CADASTRO EM ANÁLISE</Text>
                    <Text style={styles.bodyText}>
                        Solicitação de cadastro foi realizada com sucesso!
                        Iremos analisar seu pedido de cadastro. Aguarde!
                    </Text>
                </View>
            </View>
        </>
    )
}
export default Waiting;