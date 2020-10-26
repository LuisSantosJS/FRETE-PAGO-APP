import React from 'react';
import {
    Image,
    Text,
    View,
    Dimensions
} from 'react-native';
import styles from './styles'
import Carousel from 'react-native-snap-carousel';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
const fretePago = require('../../assets/fretepago.png');
const curvas = require('../../assets/curvas.png');
const NotificationIcone = require('../../assets/notification.png')
const HomeIcone = require('../../assets/home.png');
const PersonCalendarIcone = require('../../assets/calendar_person.png');
const PropostaIcone = require('../../assets/proposta.png');
const DATA: Item[] = [
    {
        title: 'PUBLICAR FRETE',
        description: 'Clique aqui para publicar seu pedido de frete.'
    },
    {
        title: 'FRETES PUBLICADOS',
        description: 'Clique aqui para ver as respostas e valores que os caminhoneiros propuseram.'
    },
    {
        title: 'FRETES EM ANDAMENTO',
        description: 'Clique aqui para ver seus fretes em andamento.'
    },
    {
        title: 'PAGAMENTO',
        description: 'Clique aqui para ver os pagamentos pendentes para os freteiros.'
    },
]


interface Item {
    title: string;
    description: string;

}
const width = Dimensions.get("window").width;
const HomeCompany: React.FC = () => {
    const navigation = useNavigation();

    const RenderItem = (item: Item, index: number) => {
        return (
            <>
                <View style={[styles.itemRenderCarroseal, styles.shadow]}>
                    <Image source={PropostaIcone} resizeMode='contain' style={{ height: width * 0.25, width: width * 0.25 }} />
                    <View style={styles.metadeDosTextos}>
                    <Text style={styles.titleItem}>{item.title}</Text>
                    <Text style={styles.descriptionItem}>{item.description}</Text>
                    </View>
                </View>
            </>
        )
    }

    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#FFFFFF' }} />
            <View style={styles.headerLogoView}>
                <Image source={fretePago} resizeMode='contain' style={{ height: '100%' }} />
            </View>
            <View style={styles.container}>
                <Image source={curvas} resizeMode='stretch' style={{ width: '100%' }} />
                <View style={styles.viewBody}>
                    <View style={styles.viewTitle}>
                        <Text style={styles.titleText} >FRETE PAGO</Text>
                        <Text style={styles.subTitleText} numberOfLines={2}>Bem vindo a maior plataformade fretes do Brasil!</Text>
                    </View>
                    <View style={{ padding: 20 }} />
                    <Carousel
                        data={DATA}
                        renderItem={({ item, index }: any) => RenderItem(item, index)}
                        sliderWidth={width}
                        itemWidth={Number(width - (width / 6))}
                    />

                </View>
            </View>
            <View style={styles.tapBar}>
                <RectButton onPress={() =>  navigation.navigate('ProfileCompany')} style={styles.buttonTab}>
                    <Image style={{ height: '50%' }} resizeMode='contain' source={PersonCalendarIcone} />
                </RectButton>
                <RectButton style={styles.buttonTab}>
                    <Image style={{ height: '80%' }} resizeMode='contain' source={HomeIcone} />
                </RectButton>
                <RectButton onPress={() => navigation.navigate('NotificationCompany')} style={styles.buttonTab}>
                    <Image style={{ height: '80%' }} resizeMode='contain' source={NotificationIcone} />
                </RectButton>
            </View>
        </>
    )
}
export default HomeCompany;