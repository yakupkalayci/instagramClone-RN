// Import React
import { View, Image } from "react-native";

// Import Icon
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Import styles
import styles from '../../../assets/styles/post.style';

function PostActions(): JSX.Element {
    return (
        <View style={styles.actions}>
            <View style={styles.actionsLeft}>
                <Icon name="cards-heart-outline" size={25} />
                <Icon name="comment-outline" size={25} />
                <Image source={require('../../../assets/icons/send.png')} style={styles.icon} />
            </View>
            <Icon name="bookmark-outline" size={25} />
        </View>
    )
}

export default PostActions;