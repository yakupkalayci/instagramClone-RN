// Import React
import { ScrollView } from "react-native";

// Import Components
import RowItem from "../components/row-item/RowItem";

function Notifications():JSX.Element {
    const fakeNotifs = [1,2,3,4,5,6,7,8,9,10];
    
    return (
        <ScrollView>
            {
                fakeNotifs.map(item => <RowItem key={item} type="notification" />)
            }
        </ScrollView>
    )
}

export default Notifications;