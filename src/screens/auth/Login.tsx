// Import React
import { useState } from "react";
import { View, Text, Pressable, Image, Alert } from "react-native";

// Import Firebase Auth
import auth from '@react-native-firebase/auth';

// Import Utils
import { authErrorParser } from "../../common/utils/authErrorParser";

// Import Components
import LinearGradientBackground from "../../components/background/LinearGradientBackground";
import Input from "../../components/form-elements/Input";
import Button from "../../components/cta/Button";

// Import Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// Import Styles
import styles from '../../assets/styles/auth.style';

function Login({ navigation }): JSX.Element {
    // variables
    const colors = ['#fff5f5', '#b2deff', '#b2f2ff'];

    // states
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    // methods
    const handleLogin = () => {
        if(email && password) {
            auth().signInWithEmailAndPassword(email, password)
            .then(() => navigation.navigate('home'))
            .catch((err) => Alert.alert(authErrorParser(err.message)));
        }
        else {
            Alert.alert('E-posta adresi ve şifre boş bırakılamaz.')
        }
    }

    return (
        <LinearGradientBackground colors={colors}>
            <>
                <View style={styles.loginContainer}>
                    <Pressable>
                        <Text>Türkçe</Text>
                    </Pressable>
                    <Icon name="instagram" size={70} color='red' />
                    <View style={styles.formContainer}>
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
                            title="Giriş yap"
                            onPress={() => handleLogin()}
                            buttonStyle={styles.loginButton}
                            titleStyle={styles.buttonText}
                        />
                        <Button 
                            title="Şifreni mi unuttun?"
                            type="Pressable"
                            onPress={() => {}}
                            titleStyle={styles.text}
                        />
                    </View>
                    <View style={styles.footer}>
                        <Button 
                            type="TouchableOpacity"
                            title="Yeni hesap oluştur"
                            buttonStyle={styles.signupButton}
                            titleStyle={styles.signupButtonText}
                            onPress={() => navigation.navigate('signup')}
                        />
                        <Image source={require('../../assets/icons/meta_logo.png')} style={styles.footerLogo} />
                    </View>
                </View>
            </>
        </LinearGradientBackground>
    )
}

export default Login;