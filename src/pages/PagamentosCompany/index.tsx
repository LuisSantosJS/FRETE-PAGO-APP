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

const DATA: Item[] = [
    {
        id: '1',
        freteiro: `${String(faker.name.firstName())} ${String(faker.name.lastName())}`,
        encomenda: `${faker.commerce.productName()}`,
        data: `${faker.date.recent()}`,
        valor_total: `${faker.finance.amount()}`,
        pagamento: 'Pendente'
    },
    {
        id: '2',
        freteiro: `${String(faker.name.firstName())} ${String(faker.name.lastName())}`,
        encomenda: `${faker.commerce.productName()}`,
        data: `${faker.date.recent()}`,
        valor_total: `${faker.finance.amount()}`,
        pagamento: 'Pendente'
    },
    {
        id: '3',
        freteiro: `${String(faker.name.firstName())} ${String(faker.name.lastName())}`,
        encomenda: `${faker.commerce.productName()}`,
        data: `${faker.date.recent()}`,
        valor_total: `${faker.finance.amount()}`,
        pagamento: 'Pendente'
    },
    {
        id: '4',
        freteiro: `${String(faker.name.firstName())} ${String(faker.name.lastName())}`,
        encomenda: `${faker.commerce.productName()}`,
        data: `${faker.date.recent()}`,
        valor_total: `${faker.finance.amount()}`,
        pagamento: 'Pendente'
    },
    {
        id: '5',
        freteiro: `${String(faker.name.firstName())} ${String(faker.name.lastName())}`,
        encomenda: `${faker.commerce.productName()}`,
        data: `${faker.date.recent()}`,
        valor_total: `${faker.finance.amount()}`,
        pagamento: 'Pendente'
    },




]

interface Item {
    id: string;
    freteiro: string;
    encomenda: string;
    data: string;
    valor_total: string;
    pagamento: string;

}


const PagamentosCompany: React.FC = () => {
    const navigation = useNavigation();

    const RenderItem = (item: Item, index: number) => {
        return (
            <>
                <TouchableOpacity onPress={() => { }} activeOpacity={0.7} style={[styles.viewFlexItem]}>
                    <View style={styles.borderItemLeft} />
                    <View style={styles.itemBody}>
                        <View style={styles.cantoItemLeft}>
                            <Image style={styles.ItemLogo} resizeMode='contain' source={ItemLogo} />
                        </View>
                        <View style={styles.itemCenter}>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>FRETEIRO: </Text>{item.freteiro}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>ENCOMENDA: </Text>{item.encomenda}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>DATA: </Text>{item.data}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>VALOR TOTAL: </Text>{item.valor_total}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>PAGAMENTO: </Text>{item.pagamento}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    return (
        <>
            <View style={[styles.container]}>
                <Text style={styles.propostas}>PAGAMENTOS</Text>
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
export default PagamentosCompany;