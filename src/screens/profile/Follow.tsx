// Import React
import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';

// Import ReactNative Reanimated
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

// Import Components
import SearchInput from '../../components/search-input/SearchInput';
import RowItem from '../../components/row-item/RowItem';

// Import Styles
import styles from '../../assets/styles/follow.style';

type Direction = 'left' | 'middle' | 'right';

function Follow({ route }): JSX.Element {
    const type = route.params?.type;

    const fakeFollows: number[] = [];
    const fakeFollowings: number[] = [];
    for (let i = 0; i < 200; i++) fakeFollows[i] = i;
    for (let i = 0; i < 200; i++) fakeFollowings[i] = i;

    // animation variables
    const offset = useSharedValue(0);

    // animation styles
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: offset.value }],
        };
    });

    // states
    const [activeSection, setActiveSection] = useState<Direction>(() => type === 'followers' ? 'left' : 'middle');

    // method for handling animation
    const handleToogleLineAnimation = (direction: Direction) => {
        setActiveSection(direction);
        switch (direction) {
            case 'left':
                offset.value = withTiming(0);
                break;
            case 'middle':
                offset.value = withTiming(127);
                break;
            case 'right':
                offset.value = withTiming(257);
                break;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.toogleContainer}>
                <Text onPress={() => handleToogleLineAnimation('left')} style={{ alignSelf: 'center' }}>94 Takipçi</Text>
                <Text onPress={() => handleToogleLineAnimation('middle')}>184 Takip</Text>
                <Text onPress={() => handleToogleLineAnimation('right')}>0 abonelik</Text>
                <Animated.View
                    style={[styles.toogleSeperator, animatedStyles]}
                />
            </View>
            <SearchInput />
            {activeSection === 'left' && <Text style={styles.title}>Tüm Takipçiler</Text>}
            {
                activeSection !== 'right' && (
                    <FlatList
                        data={activeSection === 'left' ? fakeFollows : fakeFollowings}
                        renderItem={() => (
                            <RowItem type={activeSection==='left' ? 'followers' : 'following'} />
                        )}
                        style={{ marginTop: 10 }}
                    />
                )
            }
        </View>
    )
}

export default Follow;