import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
const NotificationCompany: React.FC = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.textNotification}>Não há notificações</Text>
            </View>
        </>
    )
}
export default NotificationCompany;