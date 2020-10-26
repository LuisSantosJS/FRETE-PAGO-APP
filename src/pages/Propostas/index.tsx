import React from 'react';
import {
    View,
    Image,
    Text,
    FlatList,
    Dimensions
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
const ViewLogoItem = require('../../assets/view.png');
const ItemLogo = require('../../assets/proposta.png');
const width = Dimensions.get("window").width;

const DATA: Item[] = [
    {
        id: '1',
        destino: 'Rio de Janeiro',
        carga: 'Produtos de beleza',
        empresa: 'Roxy Tech',
        preco: '120R$',
    },
    {
        id: '2',
        destino: 'Rio de Janeiro',
        carga: 'Produtos de beleza',
        empresa: 'Roxy Tech',
        preco: '120R$',
    },
    {
        id: '3',
        destino: 'Rio de Janeiro',
        carga: 'Produtos de beleza',
        empresa: 'Roxy Tech',
        preco: '120R$',
    },
    {
        id: '4',
        destino: 'Rio de Janeiro',
        carga: 'Produtos de beleza',
        empresa: 'Roxy Tech',
        preco: '120R$',
    },

]

interface Item {
    id: string;
    destino: string;
    carga: string;
    empresa: string
    preco: string;
}

const Propostas: React.FC = () => {
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
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>DESTINO: </Text>{item.destino}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>STATUS EM ANÁLISE</Text></Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>EMPRESA: </Text>{item.empresa}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>VALOR OFERTADO: </Text>{item.preco}</Text>
                            <Text numberOfLines={1} style={[styles.textItem,{color:'#FD9606'}]}>Sua proposta está sendo analisada</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    return (
        <>
            <View style={[styles.container]}>
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
export default Propostas;