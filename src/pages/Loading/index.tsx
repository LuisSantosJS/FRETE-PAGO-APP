import React, { useEffect, useState } from 'react';
import {
    View,
    Animated,
    Image,
    Platform
} from 'react-native';
import styles from './styles';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const Logo = require('../../assets/fretepago.png')
const Loading = require('../../assets/lottie/loading.gif');
const LoadingPage: React.FC = () => {
    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: 'white' }} />
            <View style={styles.container}>
                <View style={styles.viewCenter}>
                    <Image style={{ height: '20%', maxWidth: '50%' }} source={Logo} />
                    <Image style={{ height: '25%', maxWidth: '35%' }} source={Loading} />
                </View>

            </View>
        </>
    )
}
export default LoadingPage;