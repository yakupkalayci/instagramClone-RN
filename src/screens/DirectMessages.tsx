import { useEffect } from "react";
import { View, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import SearchInput from '../components/search-input/SearchInput';
import RowItem from "../components/row-item/RowItem";

import styles from '../assets/styles/directmessages.style';

function DirectMessages(): JSX.Element {
    const fakeMessages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

    return (
        <ScrollView style={styles.container}>
            <SearchInput />
            <View style={styles.content}>
                {
                    fakeMessages.map(item => <RowItem key={item} type="message" />)
                }
            </View>
        </ScrollView>
    )
}

export default DirectMessages;