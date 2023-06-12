// Import React
import { View, Pressable, Image } from "react-native";

// Import Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Styles
import styles from '../../assets/styles/header.style';

function Header():JSX.Element {
    return (
        <View style={styles.container}>
            <View style={styles.leftPart}>
                <Image source={require('../../assets/icons/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.rightPart}>
                <Pressable>
                    <Icon name="cards-heart-outline" size={25} />
                </Pressable>
                <Pressable>
                    <Image source={require('../../assets/icons/send.png')} style={styles.icon} />
                </Pressable>
            </View>
        </View>
    )
}

export default Header;