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
const ContatoIcon = require('../../assets/contac.png');
const TelIcon = require('../../assets/tel.png');
const ChatIcon = require('../../assets/chat.png');
const ItemLogo = require('../../assets/proposta.png');
const width = Dimensions.get("window").width;

const DATA: Item[] = [
    {

        id: '1',
        destino: 'Rio de Janeiro',
        responsavel: 'Luis Santos',
        pagamento: 'Após entrega',
        empresa: 'Roxy Tech',
        valorAcordado: 'R$ 2000',
        dataCarregamento: '23:59 24/04'
    },
    {

        id: '1',
        destino: 'Rio de Janeiro',
        responsavel: 'Luis Santos',
        pagamento: 'Após entrega',
        empresa: 'Roxy Tech',
        valorAcordado: 'R$ 2000',
        dataCarregamento: '23:59 24/04'
    },
    {

        id: '1',
        destino: 'Rio de Janeiro',
        responsavel: 'Luis Santos',
        pagamento: 'Após entrega',
        empresa: 'Roxy Tech',
        valorAcordado: 'R$ 2000',
        dataCarregamento: '23:59 24/04'
    }


]

interface Item {
    id: string;
    destino: string;
    responsavel: string;
    pagamento: string;
    empresa: string;
    valorAcordado: string;
    dataCarregamento: string;
}

const PropostaAceitas: React.FC = () => {
    const navigation = useNavigation();

    const RenderItem = (item: Item, index: number) => {
        return (
            <>
                <TouchableOpacity onPress={() => navigation.navigate('InfoCorrida')} activeOpacity={0.7} style={[styles.viewFlexItem]}>
                    <View style={styles.borderItemLeft} />
                    <View style={styles.itemBody}>
                        <View style={styles.itemCenter}>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>DESTINO: </Text>{item.destino}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>EMPRESA: </Text>{item.empresa}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>RESPONSÁVEL: </Text>{item.responsavel}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>VALOR ACORDADO: </Text>{item.valorAcordado}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>PAGAMENTO: </Text>{item.pagamento}</Text>
                            <Text numberOfLines={1} style={styles.textItem}><Text style={{ fontWeight: 'bold' }}>DATA DE CARREGAMENTO: </Text>{item.dataCarregamento}</Text>
                            <Text numberOfLines={1} style={[styles.textItem, { color: '#FD9606' }]}>Clique aqui para traçar rota</Text>
                        </View>
                        <View style={styles.cantoItem}>
                            <Image resizeMode='contain' style={styles.viewLogoItem} source={ContatoIcon} />
                            <Image resizeMode='contain' style={styles.viewLogoItem} source={TelIcon} />
                            <Image resizeMode='contain' style={styles.viewLogoItem} source={ChatIcon} />
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
export default PropostaAceitas;