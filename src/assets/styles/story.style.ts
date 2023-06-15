import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
    },
    storyContainer: {
        alignItems: 'center',
        padding: 10,
    },
    storyImage: {
        width: 75,
        height: 75,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: 'red',
    },
    profileImage: {
        width: 75,
        height: 75,
        borderRadius: 50,
    },
    username: {
        marginTop: 5
    },
    addStoryIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 10
    }
})