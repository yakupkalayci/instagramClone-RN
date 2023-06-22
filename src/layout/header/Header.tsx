// Import React
import { View, Image, Text, TouchableOpacity } from "react-native";

// Import Navigation
import { useNavigation } from "@react-navigation/native";

// Import Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import Components
import HeaderButton from "../../components/header-button/HeaderButton";

// Import Types
import { THeaderOptions } from "../../router/routes";

// Import Styles
import styles from '../../assets/styles/header.style';

interface IHeaderProps {
    options?: THeaderOptions
}

function Header(props: IHeaderProps): JSX.Element {

    // destruct props
    const { options } = props;

    // variables
    const navigation = useNavigation();

    if(options?.fullContent) {
        return (
            <View style={styles.fullContentContainer}>
                {options.fullContent}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.leftPart}>
                {options?.showLogo && <Image source={require('../../assets/icons/logo.png')} style={styles.logo} />}
                {options?.canGoBack && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="keyboard-backspace" size={35}/>
                    </TouchableOpacity> 
                )}
                {options?.leftLabel && <Text style={styles.label}>{options.leftLabel}</Text>}
            </View>
            {
                options?.hasRightButtons && (
                    <View style={styles.rightPart}>
                        {
                            options.rightButtons?.map((item, index) => (
                                <HeaderButton key={index} isIcon={item.isIcon} isImage={item.isImage} name={item.name} action={item.action} />
                            ))
                        }
                    </View>
                )
            }
        </View>
    )
}

export default Header;