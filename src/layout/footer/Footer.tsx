// Import React
import { View, Pressable } from "react-native";

// Import Navigation
import { footerMenu } from "../../router/footerMenu";

// Import Icon
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Import Styles
import styles from '../../assets/styles/footer.style';

function Footer():JSX.Element {

    return (
        <View style={styles.container}>
            {
                footerMenu?.map(item => (
                    <Pressable key={item.id}>                        
                        <Icon name={item.iconName} size={35} />
                    </Pressable>
                ))
            }
        </View>
    )
}

export default Footer;