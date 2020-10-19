import React from 'react';
import {
    FlatList,
    Image,
    Text,
    TextInput,
    Dimensions,
    View
} from 'react-native';
import styles from './styles';
const Logo = require('../../assets/fretepago.png');
const Search = require('../../assets/search.png');
const PropostaAceita = require('../../assets/propostaaceita.png');
const Proposta = require('../../assets/proposta.png');
const Entregue = require('../../assets/entregue.png');
const TruckLogo = require('../../assets/truck.png');
const ViewLogoItem = require('../../assets/view.png');
const width = Dimensions.get("window").width;
interface Item {
    id: string;
    destino: string;
    carga: string;
    empresa: string
    pagamento: string;
    truck: string;

}

const DATA: Item[] = [
    {
        id: '1',
        destino: 'Rio de Janeiro',
        carga: 'Produtos de beleza',
        empresa: 'Roxy Tech',
        pagamento: 'A Combinar',
        truck: 'Carroceriabulgo v2',

    },
    {
        id: '2',
        destino: 'Rio de Janeiro',
        carga: 'Produtos de beleza',
        empresa: 'Roxy Tech',
        pagamento: 'A Combinar',
        truck: 'Carroceriabulgo v2',

    },
    {
        id: '3',
        destino: 'Rio de Janeiro',
        carga: 'Produtos de beleza',
        empresa: 'Roxy Tech',
        pagamento: 'A Combinar',
        truck: 'Carroceriabulgo v2',

    },
    {
        id: '4',
        destino: 'Rio de Janeiro',
        carga: 'Produtos de beleza',
        empresa: 'Roxy Tech',
        pagamento: 'A Combinar',
        truck: 'Carroceriabulgo v2',

    },


]

const Home: React.FC = () => {

    const RenderItem = (item: Item, index: number) => {
        return (
            <>
                <View style={[styles.viewFlexItem]}>
                    <View style={styles.borderItemLeft} />
                    <View style={styles.itemBody}>
                        <View style={styles.cantoItemLeft}>
                            <Image style={styles.truckLogo} resizeMode='contain' source={TruckLogo} />
                        </View>
                        <View style={styles.itemCenter}>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>DESTINO: </Text>{item.destino}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>CARGA: </Text>{item.carga}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>EMPRESA: </Text>{item.empresa}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>PAGAMENTO: </Text>{item.pagamento}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>CAMINHÃO: </Text>{item.truck}</Text>
                        </View>
                        <View style={styles.cantoItem}>
                            <Image resizeMode='contain' style={styles.viewLogoItem} source={ViewLogoItem} />
                        </View>
                    </View>
                </View>
            </>
        )
    }


    return (
        <>
            <View style={[styles.headerHome, { elevation: 5 }]}>
                <Image resizeMode='contain' style={[styles.logo]} source={Logo}
                />
                <View style={[styles.search, styles.shadow]}>
                    <Image resizeMode={"contain"} source={Search} style={styles.imgSearch} />
                    <TextInput
                        placeholder={'Buscar'}
                        style={styles.searchInput}
                    />
                </View>
            </View>
            <View style={[styles.container, { top: -((width * 0.13) / 2) }]}>
                <FlatList
                    data={DATA}
                    style={{ flex: 1, width: '90%' }}
                    ListHeaderComponent={() => HeaderFlatlist()}
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
export default Home;




const HeaderFlatlist = () => {
    return (
        <>
            <View style={{ height: (width * 0.13), width: '100%' }} />
            <View style={styles.headerFlatlist}>
                <View style={styles.boxProposta}>
                    <Image resizeMode='contain' style={styles.imgBoxProposta} source={Proposta} />
                    <Text style={styles.propostaText}>Propostas</Text>
                </View>
                <View style={styles.boxProposta}>
                    <Image resizeMode='contain' style={styles.imgBoxProposta} source={PropostaAceita} />
                    <Text style={styles.propostaText}>Propostas Aceitas</Text>
                </View>
                <View style={styles.boxProposta}>
                    <Image resizeMode='contain' style={styles.imgBoxProposta} source={Entregue} />
                    <Text style={styles.propostaText}>Entregues</Text>
                </View>

            </View>
            <View style={styles.viewHeaderFlatlistTitle}>
                <Text style={styles.textTitleHeaderFlatlist}>Fretes Disponíveis</Text>
            </View>
        </>
    )
}