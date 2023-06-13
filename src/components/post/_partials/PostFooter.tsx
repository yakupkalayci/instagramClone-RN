// // Import React
import { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";

// Import Icon
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Import styles
import styles from '../../../assets/styles/post.style';

function PostFooter(): JSX.Element {
    const text = '  Muhteşem Kapadokya...Muhteşem Kapadokya...Muhteşem Kapadokya...Muhteşem Kapadokya...Muhteşem Kapadokya... hello wolrd adeedads sdsfdsdfsdfowoooweowedf dfdffdfdppfdfsfs dfsd'
    const [showMore, setShowMore] = useState(false);
    const [sliceEnd, setSliceEnd] = useState(40)

    // method for showing long post description text
    const showFullText = (text:string) => {
        setSliceEnd(text.length);
        setShowMore(false);
    }

    // useEffect
    useEffect(() => {
        if(text.length > 40) {
            setShowMore(true);
        }
    }, []);

    return (
        <View style={styles.info}>
            <Text style={styles.likes}>66.333 beğenme</Text>
            <Text>
                <Text style={styles.username}>username</Text>
                {
                    text.length > 40 ? 
                    <Text>{text.slice(0, sliceEnd).concat('...')} {showMore && <Text onPress={() => showFullText(text)} style={styles.showMore}>devamı</Text>} </Text> 
                    : <Text>{text}</Text>
                }
            </Text>
            <Pressable>
                <Text style={styles.showComment}>59 yorumun tümünü gör</Text>
            </Pressable>
            <View style={styles.commentContainer}>
                <Icon name="account-circle-outline" size={25} />
                <TextInput placeholder="Yorum ekle..." style={styles.commentInput} />
                <View style={styles.commentIconsContainer}>
                    <Text>❤</Text>
                    <Text>🙌</Text>
                    <Icon name="plus-circle-outline" color={'#666'} />
                </View>
            </View>
            <Text style={styles.footer}>
                2 saat önce
            </Text>
        </View>
    )
}

export default PostFooter;