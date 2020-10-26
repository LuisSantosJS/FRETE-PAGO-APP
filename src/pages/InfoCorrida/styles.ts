import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        height: height + width / 2,
        justifyContent: 'space-around'
    },
    textHeaderTitle: {
        color: '#141414',
        fontSize: width * 0.05,
        fontWeight: '500',
        padding: width * 0.03,
        textAlign: 'center'
    },
    boxInfoView: {
        width: '100%',
        height: width * 0.9,
        backgroundColor: '#F7F7F7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewSubmit: {
        width: width * 0.7,
        height: width * 0.14,
        backgroundColor: '#FD9606',
        elevation: 2,
        borderRadius: width * 0.03,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSubmit: {
        color: 'white',
        fontSize: width * 0.05,
        fontWeight: '600'
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
    flexRow1BoxInfoTexts: {
        width: '80%',
        height: '100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    flexRow2BoxInfoTexts:{
        width: '20%',
        height: '100%',
        alignItems:'center',
        justifyContent:'center'
    },
    boxColuumstexts: {
        width: '100%',
        height: width * 0.2,
        alignItems: 'flex-start',
        padding: width * 0.04,
        justifyContent: 'space-around'
    },
    titleInfos: {
        color: '#191919',
        fontSize: width * 0.05,
        fontWeight: '600'
    },
    bodyInfos: {
        color: '#191919',
        fontSize: width * 0.045
    }
})
export default styles;