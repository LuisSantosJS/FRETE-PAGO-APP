import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
const NotificationTruck: React.FC = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.textNotification}>Não há notificações</Text>
            </View>
        </>
    )
}
export default NotificationTruck;