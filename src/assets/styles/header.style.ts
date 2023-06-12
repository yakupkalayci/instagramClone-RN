import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    logo: {
        width: 120,
        height: 40,
        resizeMode: 'contain'
    },
    leftPart: {
        width: '60%'
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
    }
});