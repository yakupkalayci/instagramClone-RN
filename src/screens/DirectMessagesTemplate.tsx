// Import React
import { View, Text, Dimensions, ScrollView } from "react-native";

// Import Components
import SearchInput from "../components/search-input/SearchInput";
import RowItem from "../components/row-item/RowItem";

// Import Styles
import styles from '../assets/styles/directmessages.style';

function DirectMessagesTemplate():JSX.Element {
    const fakeMessages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    return (
        <ScrollView style={styles.templateContainer}>
        <SearchInput />
        <View style={styles.content}>
            {
                fakeMessages.map(item => <RowItem key={item} type="message" />)
            }
        </View>
    </ScrollView>
    )
}

export default DirectMessagesTemplate;