// Import React
import { View, TextInput } from "react-native";

// Import Icon
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from '../../assets/styles/searchInput.style';

function SearchInput():JSX.Element {
    return (
        <View style={styles.container}>
            <Icon name="magnify" size={25} />
            <TextInput placeholder="Search" style={styles.input} />
        </View>
    )
}

export default SearchInput;