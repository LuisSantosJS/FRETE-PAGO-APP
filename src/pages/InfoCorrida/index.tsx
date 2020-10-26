import React from 'react';
import {
    View,
    ScrollView,
    Text,
    Image
} from 'react-native';
import styles from './styles';
const TruckImage = require('../../assets/truck.png')
const InfoCorrida: React.FC = () => {
    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ backgroundColor: 'white' }}>
                <Text style={styles.textHeaderTitle}>INFORMAÇÕES DE FRETE</Text>
                <View style={[styles.container]}>
                    <View style={[styles.boxInfoView, styles.shadow]}>
                        <View style={styles.flexRow1BoxInfoTexts}>
                            <View style={styles.boxColuumstexts}>
                                <Text style={styles.titleInfos}>LOCAL DA CARGA</Text>
                                <Text style={styles.bodyInfos}>Rua das floresSão Paulo103</Text>
                            </View>
                            <View style={styles.boxColuumstexts}>
                                <Text style={styles.titleInfos}>DESTINO</Text>
                                <Text style={styles.bodyInfos}>Rua bentoinho 120 - Rio de Janeiro</Text>
                            </View>
                            <View style={styles.boxColuumstexts}>
                                <Text style={styles.titleInfos}>RESPONSÁVEL</Text>
                                <Text style={styles.bodyInfos}>Luis Santos da Silva</Text>
                            </View>
                            <View style={styles.boxColuumstexts}>
                                <Text style={styles.titleInfos}>LOCAL DA CARGA</Text>
                                <Text style={styles.bodyInfos}>69921453</Text>
                            </View>
                        </View>
                        <View style={styles.flexRow2BoxInfoTexts}>
                            <Image source={TruckImage} resizeMode='contain' style={{ width: '80%' }} />
                        </View>
                    </View>

                    <View style={[styles.boxInfoView, styles.shadow]}>
                        <View style={styles.flexRow1BoxInfoTexts}>
                            <View style={styles.boxColuumstexts}>
                                <Text style={styles.titleInfos}>EMPRESA</Text>
                                <Text style={styles.bodyInfos}>Roxy Tech Soluções em TI</Text>
                            </View>
                            <View style={styles.boxColuumstexts}>
                                <Text style={styles.titleInfos}>CNPJ</Text>
                                <Text style={styles.bodyInfos}>789579218457</Text>
                            </View>
                            <View style={styles.boxColuumstexts}>
                                <Text style={styles.titleInfos}>CARGA</Text>
                                <Text style={styles.bodyInfos}>Podutos de escritório</Text>
                            </View>
                            <View style={styles.boxColuumstexts}>
                                <Text style={styles.titleInfos}>PESO</Text>
                                <Text style={styles.bodyInfos}>20kg</Text>
                            </View>
                        </View>
                        <View style={styles.flexRow2BoxInfoTexts}>
                            <Image source={TruckImage} resizeMode='contain' style={{ width: '80%' }} />
                        </View>
                    </View>
                    <View style={styles.viewSubmit}>
                        <Text style={styles.textSubmit}>ENVIAR PROPOSTA</Text>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default InfoCorrida;