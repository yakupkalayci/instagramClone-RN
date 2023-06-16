import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    profileInfos: {
        padding: 10
    },
    upperInfos: {
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileStats: {
        flexDirection: 'row',
        width: '70%',
        paddingRight: 40,
        justifyContent: 'space-between'
    },
    statContainer: {
        alignItems: 'center',
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 15
    },
    username: {
        marginBottom: 10, 
        marginTop: -10
    },
    actionButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 10
    },
    actionButton: {
        backgroundColor: 'lightgray',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 10,
        marginRight: 10,
        width: '50%',
        alignItems: 'center'
    },
    highlightedStories: {
        marginVertical: 15
    },
    highlightedStoriesContainer: {
        marginTop: 10
    },
    highlightedStory: {
        width: 70, 
        height: 70, 
        backgroundColor: 'lightgray', 
        borderRadius: 40, 
        marginRight: 9 
    },
    highlightedStoryLabel: {
        marginLeft: 20,
        marginTop: 7
    },
    toogleWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    toogleMenuItem: {
        marginHorizontal: 85
    },
    toogleSeperator: {
        backgroundColor: '#777', 
        width: SCREEN_WIDTH/2, 
        position: 'absolute', 
        bottom: -5, 
        height: 2, 
        left: 10
    },
    gallery: {
        marginTop: 5,
    },
    taggedView: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SCREEN_HEIGHT / 16
    },
    taggedTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        marginVertical: 5,
        textAlign: 'center',
        maxWidth: SCREEN_WIDTH / 2
    },
    taggedText: {
        textAlign: 'center',
        maxWidth: SCREEN_WIDTH / 1.5
    }
})