import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    viewButton: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    submit: {
        width: width * 0.4,
        height: width * 0.13,
        borderRadius: width * 0.03,
        backgroundColor: '#FD9606',
        alignItems: 'center',
        justifyContent: 'center'
    },
    progressView: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    ViewsInputs: {
        width: '100%',
        height: '75%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleProgress: {
        color: '#707070',
        fontSize: width * 0.05,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    progessBar: {
        width: '70%',
        height: width * 0.03,
        backgroundColor: '#707070',
        flexDirection: 'row',
        borderRadius: (width * 0.07) / 2,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    pointProgress: {
        backgroundColor: '#707070',
        width: width * 0.07,
        top: - ((width * 0.04) / 2),
        borderRadius: (width * 0.07) / 2,
        height: width * 0.07,
        elevation: 2000,
        position: 'relative'
    },
    textSubmit: {
        color: 'white',
        fontSize: width * 0.045,

    },
    inputs: {
        width: width * 0.8,
        height: width * 0.16,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        borderRadius: width * 0.03,
        borderWidth: width * 0.003,
        borderColor: '#707070'
    },
    termsText: {
        color: '#707070',
        fontSize: width * 0.038
    },
    textItemINput: {
        color: '#8e8e8e',
        fontSize: width * 0.04,
        textAlign: 'center'
    },
    viewRowItem: {
        width: '100%',
        height: width * 0.22,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: width * 0.04,
        backgroundColor: 'white',
        borderRadius: width * 0.04
    },
    separateItem: {
        width: '100%',
        height: width * 0.05
    },
    viewDownShet: {
        width: '100%',
        height: width * 0.1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonMInChet: {
        width: width * 0.1,
        height: width * 0.02,
        backgroundColor: '#e5e5e5',
        borderRadius: width * 0.02
    },
    textitemBanco:{
        color:'#141414',
        fontSize: width*0.045,
        textAlign:'justify',
    }

})
export default styles;