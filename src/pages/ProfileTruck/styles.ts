import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    tapBar: {
        width: '100%',
        height: width * 0.13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#f7f7f7',
        borderTopWidth: width * 0.0009,
        borderColor: '#e5e5e5'
    },
    buttonTab: {
        height: '100%',
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        width: '100%',
        height: width * 0.2,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerProfilePhoto: {
        width: width,
        height: width * 0.5,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    profile: {
        width: width * 0.35,
        height: width * 0.35,
        borderRadius: ((width * 0.35) / 2),
    },
    textProfile:{
        color: '#141414',
        fontSize: width*0.05,
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
    viewRowOptions: {
        width: '100%',
        height: width * 0.17,
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: width*0.03,
        justifyContent: 'flex-start',
        borderColor: '#707070'
    },
    textOptions:{
        color:'#707070',
        fontSize: width*0.05,
        fontWeight:'600',
        paddingLeft: width*0.03
    },


});
export default styles;