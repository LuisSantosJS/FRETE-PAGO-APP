import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    propostas: {
        color: '#707070',
        fontSize: width * 0.05,
        fontWeight: 'bold',
        padding: width * 0.03

    },

    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerHome: {
        width: '100%',
        height: width * 0.30,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    logo: {
        height: '50%',
    },
    search: {
        width: '70%',
        height: width * 0.13,
        backgroundColor: 'white',
        borderRadius: width * 0.06,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: width * 0.03,
        justifyContent: 'space-around'

    },
    imgSearch: {
        height: '80%'
    },
    searchInput: {
        height: width * 0.13,
        width: '90%'
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    headerFlatlist: {
        width: '100%',
        height: width * 0.3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    viewHeaderFlatlistTitle: {
        width: '90%',
        height: width * 0.14,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    boxProposta: {
        height: '70%',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    propostaText: {
        color: '#707070',
        fontSize: width * 0.045,
        textAlign: 'center'
    },
    imgBoxProposta: {
        height: '60%'
    },
    textTitleHeaderFlatlist: {
        color: '#707070',
        justifyContent: 'center',
        fontWeight: 'bold',
        textAlign: 'left',
        fontSize: width * 0.055

    },
    viewFlexItem: {
        width: '98%',
        backgroundColor: '#e5e5e5',
        height: width * 0.3,
        flexDirection: 'row',
        shadowColor: "#707070",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 9.65,

        elevation: 4,
    },
    separate: {
        width: '100%',
        height: width * 0.1
    },
    borderItemLeft: {
        height: '100%',
        width: '2%',
        backgroundColor: '#39CE37'
    },
    itemBody: {
        width: '98%',
        height: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    cantoItemLeft: {
        height: '100%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cantoItem: {
        height: '80%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '15%'
    },
    truckLogo: {
        width: width * 0.2
    },
    viewLogoItem: {
        width: width * 0.07
    },
    itemCenter: {
        height: '100%',
        width: '65%',
        textAlign: 'left',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    textItem: {
        color: '#707070',
        fontSize: width * 0.035
    },
})
export default styles;