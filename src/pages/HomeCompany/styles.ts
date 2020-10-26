import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    headerLogoView:{
        width: '100%',
        height: width*0.14,
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center'
    },
    viewBody:{
        width:'100%',
        height:'85%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    viewTitle:{
        width:'100%',
        height: width*0.2,
        alignItems:'center',
        justifyContent:'space-around'
    },
    titleText:{
        color:'#808080',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: width*0.05
    },
    subTitleText:{
        color:'#707070',
        fontWeight: '500',
        textAlign:'center',
        fontSize: width*0.045,
        width: '70%'
    },
    itemRenderCarroseal:{
        width:'100%',
        height:'90%',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'space-around'
    },
    shadow:{
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#707070",
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    tapBar:{
        width:'100%',
        height: width*0.13,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        backgroundColor:'#f7f7f7',
        borderTopWidth: width*0.0009,
        borderColor: '#e5e5e5'
    },
    buttonTab:{
        height:'100%',
        width: '33%',
        alignItems:'center',
        justifyContent:'center'
    },
    metadeDosTextos:{
        height:'30%',
        alignItems:'center',
        justifyContent:'space-around',
        width:'100%'
    },
    titleItem:{
        textAlign:'center',
        color: '#707070',
        fontWeight: '500',
        fontSize: width*0.06
    },
    descriptionItem:{
        textAlign:'center',
        width:'70%',
        color:'#707070',
        fontSize: width*0.045
    }
});
export default styles;