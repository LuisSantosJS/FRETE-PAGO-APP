import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';
const Alert = require('../assets/alert.png')
const NotFound: React.FC = () => {
    return (
        <>
        <View style={styles.container}>
            <Image source={Alert} style={styles.image}/>
        </View>
        </>
    )
}
export default NotFound;