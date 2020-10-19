import { Dimensions, StyleSheet } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        width: width,
        height: width * 0.15,
        flexDirection: 'row',
        backgroundColor:'white',
        justifyContent: 'center',
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
    logoHeaderImage: {
        width: '35%',
        height: '70%'
    },
    centerView:{
        width:'100%',
        height:'40%',
        justifyContent:'space-around',
        alignItems:'center'
    },
    titleText:{
        color: '#707070',
        fontSize: width*0.06,
        fontWeight:'400',
        textAlign:'center'
    },
    bodyText:{
        color: '#707070',
        fontSize: width*0.045,
        fontWeight:'400',
        textAlign:'center',
        width:'80%'
    }
});
export default styles;