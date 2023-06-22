import { StyleSheet, Dimensions } from "react-native";

const HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
    loginContainer: {
        height: '100%',
        borderColor: 'blue',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20
    },
    signupContainer: {
        height: '100%',
        padding: 10,
        justifyContent: 'space-between',
    },
    formContainer: {
        width: '95%',
        alignItems: 'center',
        marginBottom: 150,
    },
    signupFormContainer: {
        height : '50%', 
        justifyContent: 'space-evenly'
    },
    footerLogo: {
        width: 70,
        height: 20
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        borderWidth: 0.5,
        borderColor: 'gray',
        marginBottom: 13,
        padding: 10,
        paddingVertical: 15,
        borderRadius: 10,
        fontSize: 17,
    },
    loginButton: {
        backgroundColor: '#0046c6',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 10,
        marginBottom: 15
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    text: {
        fontSize: 17,
        fontWeight: '500'
    },
    footer: {
        width: '95%',
        alignItems: 'center',
        paddingBottom: 15
    },
    signupButton: {
        borderWidth: 1,
        borderColor: '#0046c6',
        width: '100%',
        borderRadius: 15,
        padding: 10,
        marginBottom: 15
    },
    signupButtonText: {
        textAlign: 'center',
        color: '#0046c6',
        fontWeight: '500',
        fontSize: 18
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    link: {
        textAlign: 'center',
        fontWeight: '400',
        color: 'blue',
        fontSize: 14
    }
})