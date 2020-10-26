import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    separate: {
        width: '100%',
        height: width * 0.1
    },




    borderItemLeft: {
        height: '100%',
        width: '2%',
        backgroundColor: '#FF9600'
    },
    itemBody: {
        width: '98%',
        height: '100%',
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    cantoItemLeft:{
        height:'100%',
        width: '20%',
        alignItems:'center',
        justifyContent:'center'
    },
    cantoItem:{
        height:'80%',
        alignItems:'center',
        justifyContent:'flex-start',
        width: '15%'
    },
    ItemLogo:{
        width: width*0.2
    },
    viewLogoItem:{
        width:width*0.07
    },
    itemCenter:{
        height:'100%',
        width:'75%',
        textAlign:'left',
        alignItems:'flex-start',
        justifyContent:'space-around'
    },
    textItem:{
        color:'#707070',
        fontSize: width*0.035
    },
    viewFlexItem: {
        width: '98%',
        backgroundColor:'#e5e5e5',
        height: width * 0.4,
        flexDirection: 'row',
        justifyContent:'space-around',
        
        shadowColor: "#707070",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 9.65,

        elevation: 4,
    },
})
export default styles;