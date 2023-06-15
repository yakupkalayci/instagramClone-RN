// Import React
import { View, Text, Image } from "react-native";

// Import Icon
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Import Styles
import styles from '../../assets/styles/directmessages.style';

interface IRowItemProps {
    type: 'message' | 'notification'
}

function RowItem(props: IRowItemProps): JSX.Element {

    // destruct props
    const { type } = props;


    return (
        <View style={styles.messageItem}>
            <View style={styles.leftPart}>
                <Icon name="account-circle-outline" size={45} />
                {
                    type === 'message' ? (
                        <View style={styles.messageDetails}> 
                            <Text style={styles.username}>username</Text> 
                            <View style={styles.messageInfo}> 
                                <Text style={styles.message}>messagemessagemessagemessagemessagemessagemessage</Text> 
                                <Text> . </Text> 
                                <Text>Just now</Text> 
                            </View> 
                        </View>
                    ) : (
                        <View style={styles.notificationDetails}> 
                            <Text> 
                                <Text style={styles.username}>username</Text> 
                                <Text>  has liked your photoaasa asasas asasasa assaas assas</Text> 
                                <Text> . </Text> 
                                <Text>Just now</Text> 
                            </Text> 
                        </View>
                    )
                }
            </View>
            {
                type === 'message' ? <Icon name="camera-outline" size={25} /> : <Image source={{ uri: 'https://blog.hootsuite.com/wp-content/uploads/2022/06/Instagram-Apps-Cover-Photo-556x556.png' }} style={styles.image} />
            }
        </View>
    )
}

export default RowItem;