// Import React
import { useEffect } from "react";
import { ScrollView, FlatList, LogBox } from "react-native";

// Import Components
import Story from "../components/story/Story";
import Post from "../components/post/Post";

function Home():JSX.Element {
    const fakePosts = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);

    return (
        <ScrollView>
            <FlatList 
                data={fakePosts}
                renderItem={() => <Post />}
                keyExtractor={(item) => item.toString()}
                ListHeaderComponent={<Story />}
            />
        </ScrollView>
    );
}

export default Home;