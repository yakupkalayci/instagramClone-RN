import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    templateContainer: {
        flex: 1,
    },
    content: {
        marginVertical: 10,
        marginBottom: 180
    },
    messageItem: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 5
    },
    leftPart: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    messageDetails: {
        paddingLeft: 10,
    },
    notificationDetails: {
        paddingLeft: 10,
        flexDirection: 'row',
        maxWidth: '75%'
    },
    username: {
        fontWeight: 'bold',
        marginRight: 5,
        alignSelf: 'flex-start'
    },
    messageInfo: {
        flexDirection: 'row',
    },
    image: {
        width: 55, 
        height: 55
    },
    message: {
        maxWidth: '61%',
    },
    button: {
        backgroundColor: 'lightgray',
        padding: 7,
        borderRadius: 5,
    },
    bold: {
        fontWeight: 'bold'
    }
})