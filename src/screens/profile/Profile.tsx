// Import React
import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Dimensions, FlatList, Image } from "react-native";

// Import ReAnimated
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";

// Import Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Components
import RowImage from "../../components/row-image/RowImage";

// Import Styles
import styles from '../../assets/styles/profile.style';

function Profile({navigation}): JSX.Element {
    // fake data
    const fakeHighlightedStories: string[] = [];
    const fakePosts = [1, 2, 3, 4, 5, 6, 7, 8];
    const fakeTaggedPosts: number[] = [];

    // animation variables
    const offset = useSharedValue(0);

    // animation styles
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value }],
        };
    });

    // States
    const [activeSection, setActiveSection] = useState<'left' | 'right'>('left');

    // method for handling animation
    const handleToogleLineAnimation = (direction: 'left' | 'right') => {
        setActiveSection(direction);
        switch (direction) {
            case 'left':
                offset.value = withTiming(-10);
                break;
            case 'right':
                offset.value = withTiming(180);
                break;
        }
    }

    return (
        <View>
            <View style={styles.profileInfos}>
                <View style={styles.upperInfos}>
                    <Icon name="account-circle-outline" size={70} />
                    <View style={styles.profileStats}>
                        <TouchableOpacity style={styles.statContainer}>
                            <Text style={styles.bold}>3</Text>
                            <Text>Gönderi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('follow', {type:'followers'})} style={styles.statContainer}>
                            <Text style={styles.bold}>94</Text>
                            <Text>Takipçi</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('follow', {type: 'following'})} style={styles.statContainer}>
                            <Text style={styles.bold}>184</Text>
                            <Text>Takip</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.username}>
                    <Text style={styles.bold}>User Name</Text>
                    <Text>Hakkımda</Text>
                </View>
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text>Profili Düzenle</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                        <Text>Profili Paylaş</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.highlightedStories}>
                    <Text style={styles.bold}>Hikayelerde Öne Çıkanlar</Text>
                    <Text>Favori hikayelerini profilinde tut</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.highlightedStoriesContainer}>
                        {
                            fakeHighlightedStories.length > 0 ? null : (
                                <><View style={{
                                    width: 70, height: 70, borderRadius: 40, borderColor: 'black', borderWidth: 1, marginRight: 9,
                                    alignItems: 'center', justifyContent: 'center'
                                }}><Icon name="plus" size={30} /></View><View style={{ width: 70, height: 70, backgroundColor: 'lightgray', borderRadius: 40, marginRight: 9 }}></View><View style={{ width: 70, height: 70, backgroundColor: 'lightgray', borderRadius: 40, marginRight: 9 }}></View><View style={{ width: 70, height: 70, backgroundColor: 'lightgray', borderRadius: 40, marginRight: 9 }}></View><View style={{ width: 70, height: 70, backgroundColor: 'lightgray', borderRadius: 40, marginRight: 9 }}></View></>
                            )
                        }
                    </ScrollView>
                    <Text style={styles.highlightedStoryLabel}>Yeni</Text>
                </View>
            </View>
            <View style={{ paddingBottom: 1200 }}>
                <View style={styles.toogleWrapper}>
                    <TouchableOpacity onPress={() => handleToogleLineAnimation('left')} style={styles.toogleMenuItem}>
                        <Icon name="grid" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleToogleLineAnimation('right')} style={styles.toogleMenuItem}>
                        <Icon name="tooltip-image-outline" size={30} />
                    </TouchableOpacity>
                    <Animated.View
                        style={[styles.toogleSeperator, animatedStyles]}
                    />
                </View>
                <View style={styles.gallery}>
                    {
                        activeSection === 'left' ? (
                            <FlatList
                                data={fakePosts}
                                numColumns={3}
                                renderItem={() => <RowImage imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kapadokya-G%C3%96RSELLER-2.jpg/640px-Kapadokya-G%C3%96RSELLER-2.jpg" />}
                            />
                        ) : (
                            fakeTaggedPosts.length > 0 ? (
                                <FlatList
                                    data={fakeTaggedPosts}
                                    renderItem={() => <RowImage imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Kapadokya-G%C3%96RSELLER-2.jpg/640px-Kapadokya-G%C3%96RSELLER-2.jpg" />}
                                />
                            ) : (
                                <View style={styles.taggedView}>
                                    <Icon name="contacts-outline" size={90} />
                                    <Text style={styles.taggedTitle}>Olduğun Fotoğraf ve Videolar</Text>
                                    <Text style={styles.taggedText}>İnsanlar seni fotoğraflar ve videolarda etiketlediğinde, burada görünecek</Text>
                                </View>
                            )
                        )
                    }
                </View>
            </View>
        </View>
    )
}

export default Profile;