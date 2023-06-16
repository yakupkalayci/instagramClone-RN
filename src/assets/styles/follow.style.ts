import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        padding: 10,
        paddingBottom: 200,
        marginBottom: 120
    },
    title: {
        marginVertical: 10,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 15
    },
    toogleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 10
    },
    toogleSeperator: {
        backgroundColor: '#777', 
        width: SCREEN_WIDTH/3, 
        position: 'absolute', 
        bottom: 0, 
        height: 2, 
        left: -8
    }
})