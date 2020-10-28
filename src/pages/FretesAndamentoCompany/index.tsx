import React from 'react';
import {
    View,
    Image,
    Text,
    Dimensions,
    FlatList
} from 'react-native';
import styles from './styles';
import faker from 'faker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
const ViewLogoItem = require('../../assets/view.png');
const ItemLogo = require('../../assets/proposta.png');
const width = Dimensions.get("window").width;
const telIcone = require('../../assets/tel.png')
const DATA: Item[] = [
    {
        id: '1',
        freteiro: `${String(faker.name.firstName())} ${String(faker.name.lastName())}`,
        status: 'Em andamento',
        destino: `${faker.address.state()}`,
    },
    {
        id: '2',
        freteiro: `${String(faker.name.firstName())} ${String(faker.name.lastName())}`,
        status: 'Em andamento',
        destino: `${faker.address.state()}`,
    },
    {
        id: '3',
        freteiro: `${String(faker.name.firstName())} ${String(faker.name.lastName())}`,
        status: 'Em andamento',
        destino: `${faker.address.state()}`,
    },
    {
        id: '4',
        freteiro: `${String(faker.name.firstName())} ${String(faker.name.lastName())}`,
        status: 'Em andamento',
        destino: `${faker.address.state()}`,
    },




]

interface Item {
    id: string;
    freteiro: string;
    status: string;
    destino: string

}


const FretesAndamentoCompany: React.FC = () => {
    const navigation = useNavigation();


    const RenderItem = (item: Item, index: number) => {
        return (
            <>
                <TouchableOpacity onPress={() => { }} activeOpacity={0.7} style={[styles.viewFlexItem]}>
                    <View style={styles.borderItemLeft} />
                    <View style={styles.itemBody}>
                        <View style={styles.cantoItemLeft}>
                            <Image style={styles.truckLogo} resizeMode='contain' source={ItemLogo} />
                        </View>
                        <View style={styles.itemCenter}>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>FRETEIRO: </Text>{item.freteiro}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>STATUS: </Text>{item.status}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>DESTINO: </Text>{item.destino}</Text>
                        </View>
                        <View style={styles.cantoItem}>
                            <Image resizeMode='contain' style={styles.viewLogoItem} source={telIcone} />
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    return (
        <>
            <View style={[styles.container]}>
                <Text style={styles.propostas}>FRETES EM ANDAMENTO</Text>
                <FlatList
                    data={DATA}
                    style={{ flex: 1, width: '90%' }}
                    ListHeaderComponent={() => <View style={styles.separate} />}
                    ItemSeparatorComponent={() => <View style={styles.separate} />}
                    showsVerticalScrollIndicator={false}
                    ListFooterComponent={() => <View style={styles.separate} />}
                    renderItem={({ item, index }) => RenderItem(item, index)}
                    keyExtractor={(item: Item, index) => String(index)}
                />
            </View>
        </>
    )
}
export default FretesAndamentoCompany;