// Import React
import { View, Pressable } from "react-native";

// Import Navigation
import { footerMenu } from "../../router/footerMenu";
import { useRoute, useNavigation } from "@react-navigation/native";

// Import Icon
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Import Styles
import styles from '../../assets/styles/footer.style';

function Footer():JSX.Element {

    // navigation variables
    const routes = useRoute();
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {
                footerMenu?.map(item => (
                    <Pressable key={item.id} onPress={() => navigation.navigate(item.navigateKey)}>                        
                        <Icon name={item.iconName} size={35} color={item.navigateKey === routes.name ? 'black' : '#5e5e5e'} />
                    </Pressable>
                ))
            }
        </View>
    )
}

export default Footer;