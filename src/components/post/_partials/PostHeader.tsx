// Import React
import { View, Text } from "react-native";

// Import Icon
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Import styles
import styles from '../../../assets/styles/post.style';

function PostHeader(): JSX.Element {
    return (
        <View style={styles.header}>
            <View style={styles.headerLeft}>
                <Icon name="account-circle-outline" size={40} />
                <Text style={styles.username}>username</Text>
            </View>
            <Icon name="dots-vertical" size={25} />
        </View>
    )
}

export default PostHeader;