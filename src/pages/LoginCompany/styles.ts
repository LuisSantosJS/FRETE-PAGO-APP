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
    imageLogo: {
        width: width * 0.7,
        height: width * 0.4
    },
    viewImageCenter: {
        width: '100%',
        height: '25%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color: '#141414',
        width: '90%',
        textAlign: 'center',
        fontSize: width * 0.045,
        fontWeight: '200',
        textShadowColor: '#000',
        textShadowOffset: { width: 0.1, height: 0.1 },
        textShadowRadius: 0.2
    },
    containerInputs: {
        width: '100%',
        height: '35%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    viewLoginRegister: {
        width: '100%',
        height: '20%',
        padding: width*0.02,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewInputs: {
        width: width * 0.8,
        height: width * 0.16,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        borderRadius: width * 0.03,
        borderWidth: width * 0.003,
        borderColor: '#707070'
    },
    viewInputLogo: {
        height: width * 0.16,
        width: width * 0.16,
        alignItems: 'center',
        borderRightWidth: width * 0.003,
        borderColor: '#BABABA',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        height: '100%',
        fontSize: width * 0.05,
        padding: width * 0.02
    },
    login: {
        width: width * 0.5,
        height: width * 0.15,
        backgroundColor: '#FD9606',
        borderRadius: width * 0.04,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textRegister:{
        color:'#707070',
        fontSize:width*0.045
    },
    textLogin:{
        color:'white',
        fontSize: width*0.055,
        fontWeight: 'bold'
    },
    header: {
        width: width,
        height: width * 0.15,
        flexDirection: 'row',
        backgroundColor:'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 200,
        borderBottomWidth: width * 0.001,
        borderColor: '#707070',
    },
    shadow:{
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#707070",
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

});
export default styles;