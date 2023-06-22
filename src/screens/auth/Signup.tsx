// Import React
import { useState } from "react";
import { View, Text, Alert } from "react-native";

// Import Firebase Auth
import auth from '@react-native-firebase/auth';

// Import Utils
import { authErrorParser } from "../../common/utils/authErrorParser";

// Import Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Components
import LinearGradientBackground from "../../components/background/LinearGradientBackground";
import Input from "../../components/form-elements/Input";
import Button from "../../components/cta/Button";

// Import Styles
import styles from '../../assets/styles/auth.style';

function Signup({ navigation }): JSX.Element {
    // variables
    const colors = ['#fff5f5', '#b2deff', '#b2f2ff'];

    // states
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // methods
    const handleSignUp = () => {
        if(email && password) {
            auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                navigation.navigate('home')
            }).catch(err => Alert.alert(authErrorParser(err.message)));
        }
        else {
            Alert.alert('E-posta adresi ve şifre boş bırakılamaz')
        }
    }

    return (
        <LinearGradientBackground colors={colors}>
            <>
                <View style={styles.signupContainer}>
                    <View style={styles.signupFormContainer}>
                        <Icon name="arrow-left" size={25} onPress={() => navigation.goBack()} />
                        <Text style={styles.title}>E-posta adresin nedir?</Text>
                        <Text>Sana ulaşabileceğimiz e-posta adresini gir.
                            Bunu profilinde başka kimse göremeyecek.
                        </Text>
                        <Input
                            value={email}
                            onChange={(text) => setEmail(text)}
                            keyboardType='email-address'
                            placeholder="E-posta adresi"
                            styles={styles.input}
                        />
                        <Input
                            value={password}
                            onChange={(text) => setPassword(text)}
                            secureTextEntry={true}
                            placeholder='Şifre'
                            styles={styles.input}
                        />
                        <Button
                            type="TouchableOpacity"
                            title="Kayıt Ol"
                            onPress={() => handleSignUp()}
                            buttonStyle={styles.loginButton}
                            titleStyle={styles.buttonText}
                        />
                    </View>
                    <Button
                        title="Hesabın zaten var mı?"
                        type="Pressable"
                        onPress={() => navigation.goBack()}
                        titleStyle={styles.link}
                    />
                </View>
            </>
        </LinearGradientBackground>
    )
}

export default Signup;