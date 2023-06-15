import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
    },
    fullContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    logo: {
        width: 120,
        height: 40,
        resizeMode: 'contain'
    },
    leftPart: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightPart: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '20%'
    },
    icon: {
        width: 25,
        height: 25
    },
    label: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
});