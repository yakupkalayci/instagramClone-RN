// Import React
import { useEffect } from "react";
import { ScrollView, FlatList, LogBox } from "react-native";

// Import Navigation
import { useNavigation } from "@react-navigation/native";

// Import Screens
import DirectMessagesTemplate from "./DirectMessagesTemplate";

// Import Components
import Story from "../components/story/Story";
import Post from "../components/post/Post";

function Home(): JSX.Element {
    const fakePosts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const navigation = useNavigation();

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
    }, []);

    return (
        <ScrollView contentOffset={{ x: 0, y: 0 }} horizontal={true} onScrollEndDrag={(event) => {
            if(event.nativeEvent.targetContentOffset?.x && event.nativeEvent.targetContentOffset?.x > 15) {
                navigation.navigate('dm');
            }
        }}>
            <FlatList
                data={fakePosts}
                renderItem={() => <Post />}
                keyExtractor={(item) => item.toString()}
                ListHeaderComponent={<Story />}
            />
            <DirectMessagesTemplate />
        </ScrollView>
    );
}

export default Home;