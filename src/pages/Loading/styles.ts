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
    viewCenter:{
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor:'white'
    }
});
export default styles;