import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        marginLeft: 10,
        fontSize: 17,
        fontWeight: "500",
    },
    image: {
        width: '100%',
        height: 300,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    actionsLeft: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between'
    },
    icon: {
        width: 25,
        height: 25
    },
    info: {
        padding: 10
    },
    likes: {
        fontWeight: 'bold'
    },
    showComment: {
        marginVertical: 5,
        color: 'gray'
    },
    commentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    commentIconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '18%',
        justifyContent: 'space-between'
    },
    commentInput: {
        position: 'absolute',
        left: Dimensions.get('window').width / 11
    },
    footer: {
        color: 'gray',
        fontSize: 13,
        marginVertical: 5
    },
    showMore: {
        color: 'gray',
    }
})