// Import React
import { View, Image } from "react-native";

// Import Partials
import PostHeader from "./_partials/PostHeader";
import PostActions from "./_partials/PostActions";
import PostFooter from "./_partials/PostFooter";

// Import styles
import styles from '../../assets/styles/post.style';

function Post(): JSX.Element {
    return (
        <View>
            <PostHeader />
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kapadokya-G%C3%96RSELLER-2.jpg/640px-Kapadokya-G%C3%96RSELLER-2.jpg' }}
                style={styles.image}
            />
            <PostActions />
            <PostFooter />
        </View>
    )
}

export default Post;