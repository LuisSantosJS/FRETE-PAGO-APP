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
        caminhoneiro: `#${faker.name.firstName()} ${faker.name.lastName()}`,
        valor_ofertado: Number(faker.finance.amount()),
        truck: `caravana`,
        reputacao: ''
    },
    {
        id: '2',
        caminhoneiro: `#${faker.name.firstName()} ${faker.name.lastName()}`,
        valor_ofertado: Number(faker.finance.amount()),
        truck: `caravana`,
        reputacao: ''
    },
    {
        id: '3',
        caminhoneiro: `#${faker.name.firstName()} ${faker.name.lastName()}`,
        valor_ofertado: Number(faker.finance.amount()),
        truck: `caravana`,
        reputacao: ''
    },
    {
        id: '4',
        caminhoneiro: `#${faker.name.firstName()} ${faker.name.lastName()}`,
        valor_ofertado: Number(faker.finance.amount()),
        truck: `caravana`,
        reputacao: ''
    },
    {
        id: '5',
        caminhoneiro: `#${faker.name.firstName()} ${faker.name.lastName()}`,
        valor_ofertado: Number(faker.finance.amount()),
        truck: `caravana`,
        reputacao: ''
    },


]

interface Item {
    id: string;
    caminhoneiro: string;
    valor_ofertado: number;
    truck: string;
    reputacao: string;

}

const PropostasDetalhesCompany: React.FC = () => {
    const navigation = useNavigation();

    const RenderItem = (item: Item, index: number) => {
        return (
            <>
                <TouchableOpacity onPress={() => { }} activeOpacity={0.7} style={[styles.viewFlexItem]}>
                    <View style={styles.itemBody}>
                        <View style={styles.cantoItemLeft}>
                            <Image style={styles.ItemLogo} resizeMode='contain' source={ItemLogo} />
                        </View>
                        <View style={styles.itemCenter}>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>CAMINHONEIRO: </Text>{item.caminhoneiro}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>VALOR OFERTADO: </Text>{item.valor_ofertado}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>CAMINHÃO: </Text>{item.truck}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>REPUTAÇÃO: </Text>{item.reputacao}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }
    return (
        <>
            <View style={[styles.container]}>
                <Text style={styles.propostas}>PROPOSTAS #{String(faker.random.alphaNumeric(6)).toUpperCase()}</Text>
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
export default PropostasDetalhesCompany;