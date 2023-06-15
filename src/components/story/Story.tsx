import { View, Image, Text, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from '../../assets/styles/story.style';

function Story(): JSX.Element {
    const fakeStories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    return (
        <FlatList
            data={fakeStories}
            renderItem={({ index }) => (
                <View style={styles.storyContainer}>
                    {
                        index === 0 ? (
                            <View>
                                <Image source={{ uri: 'https://www.pardus.org.tr/wp-content/uploads/2022/04/1-dark-1024x576.png' }} style={styles.profileImage} />
                                <Icon name='plus-circle' color='#2296e3'  size={25} style={styles.addStoryIcon} />
                            </View>
                        )
                            : <Image
                                source={{ uri: 'https://www.fotografindir.net/wp-content/uploads/2022/08/whatsapp-profil-fotograflari.jpg.webp' }}
                                style={styles.storyImage}
                            />
                    }
                    <Text style={styles.username}>{index === 0 ? 'Hikayen' : 'username'}</Text>
                </View>
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        />
    )
}

export default Story;