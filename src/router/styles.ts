import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
    header: {
        width: width,
        height: width * 0.14,
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
    arrowView: {
        width: width * 0.2,
        height: width * 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoHeaderImage: {
        width: '35%',
        height: '70%'
    }
});
export default styles;