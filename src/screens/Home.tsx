// Import React
import { View, FlatList } from "react-native";

// Import Components
import Post from "../components/post/Post";

function Home():JSX.Element {
    const fakePosts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    return (
        <View>
            <FlatList 
                data={fakePosts}
                renderItem={() => <Post />}
                keyExtractor={(item) => item.toString()}
            />
        </View>
    );
}

export default Home;