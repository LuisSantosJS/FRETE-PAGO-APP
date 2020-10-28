import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imageLogo: {
        width: width * 0.6,
        height: width * 0.3
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
        textShadowRadius: 0.3
    },
    barTab: {
        width: '100%',
        height: width * 0.2,
        flexDirection: 'row'
    },
    buttomTabBar: {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButtomTab: {
        color: 'white',
        fontSize: width * 0.045,
        fontWeight: '500',
        textShadowColor: '#000',
        textShadowOffset: { width: 0.5, height: 0.5 },
        textShadowRadius: 1
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
    containerBody: {
        width: '100%',
        height: '65%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemRenderCarroseal:{
        width:'100%',
        height:'80%',
        backgroundColor:'#e5e5e5',
        alignItems:'center',
        justifyContent:'center'
    },
    textLogins:{
        color:'#FD9606',
        fontSize: width*0.04,
        padding: width*0.03
    },
    textePlanos:{
        color:'#141414',
        fontSize: width*0.045,
        fontWeight:'500'
    }

});
export default styles;