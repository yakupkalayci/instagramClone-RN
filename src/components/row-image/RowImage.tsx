// Import React
import { View, Image } from 'react-native';

import styles from '../../assets/styles/rowImage.style';

interface IRowImageProps {
    imageUrl: string;
}

function RowImage(props: IRowImageProps): JSX.Element {

    // destruct props
    const { imageUrl } = props;

    return (
        <View style={styles.row}>
            <Image source={{ uri: imageUrl }} style={styles.postImage} />
        </View>
    )
}

export default RowImage;