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
        frete: `#${String(faker.random.alphaNumeric(6)).toUpperCase()}`,
        propostas: Number(faker.random.number(9)),
        mercadoria: `${faker.commerce.productName()}`,
    },
    {
        id: '2',
        frete: `#${String(faker.random.alphaNumeric(6)).toUpperCase()}`,
        propostas: Number(faker.random.number(9)),
        mercadoria: `${faker.commerce.productName()}`,
    },

    {
        id: '3',
        frete: `#${String(faker.random.alphaNumeric(6)).toUpperCase()}`,
        propostas: Number(faker.random.number(9)),
        mercadoria: `${faker.commerce.productName()}`,
    },

    {
        id: '4',
        frete: `#${String(faker.random.alphaNumeric(6)).toUpperCase()}`,
        propostas: Number(faker.random.number(9)),
        mercadoria: `${faker.commerce.productName()}`,
    },

    {
        id: '5',
        frete: `#${String(faker.random.alphaNumeric(6)).toUpperCase()}`,
        propostas: Number(faker.random.number(9)),
        mercadoria: `${faker.commerce.productName()}`,
    },



]

interface Item {
    id: string;
    frete: string;
    propostas: number;
    mercadoria: string

}


const FretesPublicadosCompany: React.FC = () => {
    const navigation = useNavigation();
    const handleNavigateDetalhes = () => {
        navigation.navigate('PropostasDetalhesCompany')
    }
    const RenderItem = (item: Item, index: number) => {
        return (
            <>
                <TouchableOpacity onPress={() => handleNavigateDetalhes()} activeOpacity={0.7} style={[styles.viewFlexItem]}>
                    <View style={styles.borderItemLeft} />
                    <View style={styles.itemBody}>
                        <View style={styles.cantoItemLeft}>
                            <Image style={styles.ItemLogo} resizeMode='contain' source={ItemLogo} />
                        </View>
                        <View style={styles.itemCenter}>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>FRETE: </Text>{item.frete}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>PROPOSTAS: </Text>{item.propostas}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>MERCADORIA: </Text>{item.mercadoria}</Text>
                            <Text numberOfLines={1} style={[styles.textItem, { color: '#FD9606' }]}>Clique aqui para ver as propostas</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    return (
        <>
            <View style={[styles.container]}>
                <Text style={styles.propostas}>PROPOSTAS</Text>
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
export default FretesPublicadosCompany;