import React, { } from 'react';
import {
    View,
    Text,
    Image,
    Dimensions
} from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';
const DATA: Item[] = [
    {
        name: 'luis'
    },
    {
        name: 'luis'
    },
    {
        name: 'luis'
    },
    {
        name: 'luis'
    },
]
interface Item {
    name: string;
}
const width = Dimensions.get("window").width;
const FretePago = require('../../assets/fretepago.png');

const BeforeLoginCompany: React.FC = () => {
    const navigation = useNavigation();
    const RenderItem = (item: Item, index: number) => {
        return (
            <>
                <View style={styles.itemRenderCarroseal}>
                    <Text style={styles.textePlanos}>PLANOS</Text>
                </View>
            </>
        )
    }

    return (
        <>
            <View style={{ width: '100%', height: getStatusBarHeight(true), backgroundColor: '#FD9606' }} />
            <View style={[styles.header, { backgroundColor: '#FD9606' }, styles.shadow]} />
            <View style={styles.container}>
                <View style={styles.viewImageCenter}>
                    <Image style={styles.imageLogo} source={FretePago} />
                    <Text style={styles.text}>A maior plataforma de fretes</Text>
                </View>
                <View style={[styles.containerBody]}>
                    <Carousel
                        data={DATA}
                        renderItem={({ item, index }: any) => RenderItem(item, index)}
                        sliderWidth={width}
                        itemWidth={Number(width - (width / 6))}
                    />
                    <TouchableOpacity onPress={()=> navigation.navigate('LoginCompany')} activeOpacity={0.7}>
                        <Text style={styles.textLogins}>Já é cadastrado? clique aqui.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}
export default BeforeLoginCompany;