// Import React
import { Text, View, Image, FlatList, Pressable } from "react-native";

// Import Styles
import styles from '../assets/styles/explore.style';

function Explore(): JSX.Element {
    const fakePosts = [];
    for (let i = 0; i < 300; i++) {
        fakePosts[i] = i;
    }

    const categories = ["Car", "Movies", "Culture", "Science", "Software", "Economy", "Foods", "Shopping", "Jewellery"];

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <Pressable style={styles.categoryItem}>
                        <Text>{item}</Text>
                    </Pressable>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.categoryContainer}
            />
            <FlatList
                data={fakePosts}
                numColumns={3}
                renderItem={() => (
                    <View style={styles.row}>
                        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kapadokya-G%C3%96RSELLER-2.jpg/640px-Kapadokya-G%C3%96RSELLER-2.jpg' }} style={styles.postImage} />
                    </View>
                )}
            />
        </View>
    )
}

export default Explore;