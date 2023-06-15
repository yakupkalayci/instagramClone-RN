// Import React
import { Pressable, Image } from 'react-native';

// Import Icon
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Images
import { images } from '../../assets/icons/images';

interface IHeaderButtonProps {
    isImage: boolean;
    isIcon: boolean;
    name: string;
    action: () => void;
}

function HeaderButton(props:IHeaderButtonProps): JSX.Element {

    // destruct props
    const {name, isImage, isIcon, action} = props;    

    return (
        <Pressable onPress={action}>
            {
                isIcon &&  <Icon name={name} size={25} />
            }
            {
                isImage && <Image source={images[name]} style={{width: 25, height: 25}} />
            }
        </Pressable>
    )
}

export default HeaderButton;